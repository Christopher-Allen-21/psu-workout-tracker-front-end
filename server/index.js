const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const YAML = require('yamljs')
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = YAML.load('./swagger.yaml')
const UserModel = require('./models/user.js')


// Setup and configuration
const app = express()

dotenv.config()

const PORT = process.env.PORT || 7000
const MONGO_URL = process.env.MONGO_URL

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use(express.json())


mongoose.connect(MONGO_URL).then(() => {
    console.log("Db is connected successfully")
    app.listen(PORT, () => {
        console.log(`Server is running on http://${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})



// Endpoints
app.get('/', (req, res) => {
    res.send('Hello World from Express and MongoDb!')
})

app.get('/users', async(req, res) => {
    try {
        const user = await UserModel.find()
        res.status(200).send({
            user
        })
    } 
    catch (error) {
        res.status(500).send({
            message: `${error}`
        })
    }
})

app.get('/users/:id', async(req, res) => {
    const id = req.params.id

    try {
        const user = await UserModel.findById(id)
        if(user) {
            res.status(200).send({
                user
            })
        }
        else {
            res.status(404).send({
                message: "User not found"
            })
        }
    }
    catch (error){
        res.status(500).send({
            message: `${error}`
        })
    }
})

app.post('/users', async(req, res) => {
    const newUser = new UserModel({ ...req.body })

    try {
        const insertedUser = await newUser.save()
        res.status(201).json(insertedUser)
    }
    catch (error) {
        if(error instanceof mongoose.Error.ValidationError) {
            res.status(400).send({
                message: `${error}`
            })
        }
        res.status(500).send({
            message: `${error}`
        })
    }
})
    
app.put('/users/:id', async(req, res) => {
    const id = req.params.id

    try {
        const user = await UserModel.findById(id)

        if(user) {
            await UserModel.findByIdAndUpdate(id, req.body)
            const updatedUser = await UserModel.findById(id)
            res.status(200).send({
                updatedUser
            })
        }
        else {
            res.status(404).send({
                message: "User not found"
            })
        }
    }
    catch (error) {
        if(error instanceof mongoose.Error.ValidationError) {
            res.status(400).send({
                message: `${error}`
            })
        }
        res.status(500).send({
            message: `${error}`
        })
    }
})

app.delete('/users/:id', async(req, res) => {
    const id = req.params.id

    try {
        const userToDelete = await UserModel.findById(id)
        if(userToDelete) {
            await UserModel.deleteOne(userToDelete)
            res.status(200).send({
                message: "User deleted successfully."
            })
        }
        else {
            res.status(404).send({
                message: "User not found"
            })
        }
    }
    catch (error) {
        res.status(500).send({
            message: `${error}`
       })
    }
})
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const YAML = require('yamljs')
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = YAML.load('./swagger.yaml')
const UserModel = require('./models/user.js')




const app = express()

dotenv.config()

const PORT = process.env.PORT || 7000
const MONGO_URL = process.env.MONGO_URL

app.use('/api-docs', express.json(), swaggerUI.serve, swaggerUI.setup(swaggerDocument))

mongoose.connect(MONGO_URL).then(() => {
    console.log("Db is connected successfully")
    app.listen(PORT, () => {
        console.log(`Server is running on http://${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})




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
            message: `An error occurred: ${error}`
        })
    }
})

app.get('/users/:id', async(req, res) => {
    const id = req.params.id

    try {
        const user = await UserModel.findById(id)
        res.status(200).send({
            user
        })
    }
    catch {
        res.status(404).send({
            message: "User not found."
        })
    }
})



app.post('/users', async(req, res) => {


    if(!req.body) {
        res.status(400).send({
            message: "Bad request. No user provided."
        }) 
    }
    else {
        const newUser = new UserModel({ ...req.body })

        try {
            const insertedUser = await newUser.save()
            res.status(201).json(insertedUser)
        }
        catch {
            res.status(500).send({
                 message: `An error occurred: ${error}`
            })
        }
    } 
})
    
app.put('/users/:id', async(req, res) => {
    const id = req.params.id

    try {
        await UserModel.findByIdAndUpdate(id, req.body)
        const updatedUser = await UserModel.findById(id)
        res.status(200).send({
            updatedUser
        })
    }
    catch (error) {
        res.status(404).send({
            message: `User not found ${error}`
        })
    }
})

    
app.delete('/users/:id', async(req, res) => {
    const id = req.params.id

    try {
        const userToDelete = await UserModel.findById(id)
        await UserModel.deleteOne(userToDelete)
        res.status(200).send({
            message: "User deleted successfully."
        })
    }
    catch (error) {
        res.status(500).send({
            message: `An error occurred: ${error}`
       })
    }
})


/*

npm init -y                         --> installs npm and creates package.json
npm install express                 --> installs express
npm i mongoose                      --> installs install mongoose
npm i dotenv                        --> installs dotenv for environment vars
npm install --save-dev nodemon      --> installs nodemon
npm install yamljs                  --> installs yaml
npm install swagger-ui-express      --> installs swagger UI

to run "node index.js" or "npm start" (npm start defined in package.json)
http://localhost:3000/

Tutorial to for setting up Express and Mongo:
youtube.com/watch?v=30p9QfybWZg

Mongoose Queries:
https://www.geeksforgeeks.org/mongoose-queries/

Links for when Canvas crashes:
https://psu.instructure.com/courses/2383057/pages/instantiating-a-mern-architecture?module_item_id=43085873
https://psu.instructure.com/courses/2383057/pages/restful-apis-integration?module_item_id=43085909


*/
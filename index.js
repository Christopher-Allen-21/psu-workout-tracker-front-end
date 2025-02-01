import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import UserModel from "./models/user.js"

const app = express()

dotenv.config()

const PORT = process.env.PORT || 7000
const MONGOURL = process.env.MONGO_URL

app.use(express.json())

mongoose.connect(MONGOURL).then(() => {
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
    catch {
        res.status(500).send({
            message: "An error occurred"
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
            message: "User not found"
        })
    }
})



app.post('/users/:id', (req, res) => {
    const user = req.body

    if(!res.body) {
        res.status(400).send({
            message: 'No User provided'
        })
    }

    res.status(201).send({
        tshirt: `tshirt with your logo: ${logo} and ID of ${id}`
    })
})



/*

to run "node index.js" or "npm start" (npm start defined in package.json)
http://localhost:3000/

Tutorial to connect:
youtube.com/watch?v=30p9QfybWZg

Links for when Canvas crashes:
https://psu.instructure.com/courses/2383057/pages/instantiating-a-mern-architecture?module_item_id=43085873
https://psu.instructure.com/courses/2383057/pages/restful-apis-integration?module_item_id=43085909


*/
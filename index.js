import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

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

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthDate: String,
    email: String,
    height: Number,
    weight: Number
}, 
{
    collection : 'Users'
})

const UserModel = mongoose.model("users", userSchema)



app.get('/', (req, res) => {
    res.send('Hello World from Express!')
})

app.get('/users', async(req, res) => {
    const userData = await UserModel.find()
    res.status(200).send({
        userData
    })
})

app.get('/users/:id', (req, res) => {
    let userToReturn = null

    for(let user of users) {
        if(user.id.toString() == req.params.id) {
            userToReturn = user
        }
    }

    res.status(200).send({
        userToReturn
    })
})

app.post('/users/:id', (req, res) => {
    if(!res.body) {
        res.status(400).send({
            message: 'No User provided'
        })
    }

    res.status(201).send({
        tshirt: `tshirt with your logo: ${logo} and ID of ${id}`
    })
})

// to run "node index.js" or "npm start" (npm start defined in package.json)
// http://localhost:3000/

/*

Links for when Canvas crashes:
https://psu.instructure.com/courses/2383057/pages/instantiating-a-mern-architecture?module_item_id=43085873
https://psu.instructure.com/courses/2383057/pages/restful-apis-integration?module_item_id=43085909


*/
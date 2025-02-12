const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "firstName is a required field"]
    },
    lastName: {
        type: String,
        required: [true, "lastName is a required field"]
    },
    birthDate: {
        type: String,
        required: [true, "birthDate is a required field"]
    },
    email: {
        type: String,
        required: [true, "email is a required field"],
    },
    height: Number,
    weight: Number
}, 
{
    collection : 'Users' // must match name of Collection in MongoDb
})

const UserModel = mongoose.model("Users", UserSchema)

module.exports = UserModel
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is a required field"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is a required field"]
    },
    birthDate: {
        type: String,
        required: [true, "Birth date is a required field"]
    },
    email: {
        type: String,
        required: [true, "First name is a required field"],
    },
    height: Number,
    weight: Number
}, 
{
    collection : 'Users' // must match name of Collection in MongoDb
})

const UserModel = mongoose.model("Users", UserSchema)

module.exports = UserModel
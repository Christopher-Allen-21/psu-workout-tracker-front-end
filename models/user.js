import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
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

const UserModel = mongoose.model("Users", UserSchema)

export default UserModel
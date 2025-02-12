const mongoose = require('mongoose')

const ExerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is a required field"]
    },
    description: {
        type: String,
        required: [true, "Description is a required field"]
    },
    bodyArea: {
        type: String,
        required: [true, "BodyArea is a required field"]
    },
    musclesUsed: [string],
}, 
{
    collection : 'Exercises' // must match name of Collection in MongoDb
})

const ExerciseModel = mongoose.model("Exercise", ExerciseSchema)

module.exports = UserModel
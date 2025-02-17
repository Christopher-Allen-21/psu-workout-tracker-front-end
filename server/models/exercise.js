const mongoose = require('mongoose')

// {
//     "name": "Seated Row",
//     "description":"The Seated Row is an exercise that targets the muscles of the back and upper arms. It involves sitting on a rowing machine with a straight back and pulling a weighted bar towards your chest.",
//     "bodyArea": ["Chest", "Arms", "Shoulders"],
//     "musclesUse": [],
//     "machinesUsed": []
// }

const ExerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is a required field"]
    },
    description: {
        type: String,
        required: [true, "description is a required field"]
    },
    // Chest, Arms, etc.
    bodyArea: {
        type: [String],
        required: [true, "bodyArea is a required field"]
    },
    musclesUsed: [String],
    machinesUsed: [String]
}, 
{
    collection : 'Exercises' // must match name of Collection in MongoDb
})

const ExerciseModel = mongoose.model("Exercise", ExerciseSchema)

module.exports = ExerciseModel
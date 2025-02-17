const mongoose = require('mongoose')

// {
//     "name": "Push",
//     "description":"The Push program consists of programs that utilize a pushing motion.",
//     "timesCompleted": 0,
//     "customOrPremade": "Premade",
//     "bodyArea": ["Chest", "Arms", "Shoulders"],
//     "workouts": ["67ad3ed4886f603bab079bea", "67ad3fe4886f603bab079bef", "67ad4004886f603bab079bf1", "67ad40a0886f603bab079bf3","67ad416c6fdce544ec040881"],
//     "musclesUse": []
// }

const ProgramSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is a required field"]
    },
    description: {
        type: String,
        required: [true, "description is a required field"]
    },
    timesCompleted: {
        type: Number,
        required: [true, "workouts is a required field"]
    },
    customOrPremade: {
        type: String,
        required: [true, "workouts is a required field"]
    },
    // Chest, Arms, etc.
    bodyArea: {
        type: [String],
        required: [true, "bodyArea is a required field"]
    },
    // Array of exercise ids
    workouts: {
        type: [String],
        required: [true, "workouts is a required field"]
    },
    musclesUsed: [String],
}, 
{
    collection : 'Programs' // must match name of Collection in MongoDb
})

const ProgramModel = mongoose.model("Programs", ProgramSchema)

module.exports = ProgramModel
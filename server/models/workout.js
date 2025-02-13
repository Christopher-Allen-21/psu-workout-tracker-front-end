const mongoose = require('mongoose')

const ExerciseModel = require('../models/exrcise.js')

const WorkoutSchema = new mongoose.Schema({
    exercises: {
        type: [ExerciseModel],
        required: [true, "exercises is a required field"]
    },
    description: {
        type: String,
        required: [true, "description is a required field"]
    },
    // Chest, Arms, etc.
    bodyArea: {
        type: String,
        required: [true, "bodyArea is a required field"]
    },
    workouts: {
        type: [String],
        required: [true, "bodyArea is a required field"]
    },
    musclesUsed: [String],
}, 
{
    collection : 'Workouts' // must match name of Collection in MongoDb
})

const WorkoutModel = mongoose.model("Workouts", WorkoutSchema)

module.exports = WorkoutModel
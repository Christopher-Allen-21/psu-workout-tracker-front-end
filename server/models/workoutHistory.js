const mongoose = require('mongoose')

const WorkoutHistorySchema = new mongoose.Schema({
    // Id of program
    program: {
        type: String,
        required: [true, "firstName is a required field"]
    },
    dateOfWorkout: {
        type: String,
        required: [true, "dateOfWorkout is a required field"]
    },
    // how user felt during workout
    feeling: String,
}, 
{
    collection : 'WorkoutHistory' // must match name of Collection in MongoDb
})

const WorkoutHistoryModel = mongoose.model("WorkoutHistory", WorkoutHistorySchema)

module.exports = WorkoutHistoryModel
const mongoose = require('mongoose')

const ProgramSchema = new mongoose.Schema({
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
    collection : 'Programs' // must match name of Collection in MongoDb
})

const ProgramModel = mongoose.model("Programs", ProgramSchema)

module.exports = ProgramModel
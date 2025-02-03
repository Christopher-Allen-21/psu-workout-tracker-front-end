const mongoose = require('mongoose')

const HarryPotterHouseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is a required field"]
    },
    houseColours: {
        type: String,
        required: [true, "houseColours is a required field"]
    },
    founder: {
        type: String,
        required: [true, "founder is a required field"]
    },
    animal: {
        type: String,
        required: [true, "animal is a required field"]
    },
    element: {
        type: String,
        required: [true, "element is a required field"]
    },
    ghost: {
        type: String,
        required: [true, "ghost is a required field"]
    },
    commonRoom: {
        type: String,
        required: [true, "commonRoom is a required field"]
    },
}, 
{
    collection : 'HarryPotterHouse' // must match name of Collection in MongoDb
})

const HarryPotterHouseModel = mongoose.model("HarryPotterHouse", HarryPotterHouseSchema)

module.exports = HarryPotterHouseModel
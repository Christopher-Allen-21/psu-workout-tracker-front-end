const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const YAML = require('yamljs')
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = YAML.load('./swagger.yaml')

const userRoutes = require('./routes/user.js')
const exerciseRoutes = require('./routes/exercise.js')
const programRoutes = require('./routes/program.js')
const workoutHistoryRoutes = require('./routes/workoutHistory.js')


// Setup and configuration
const app = express()
dotenv.config()

const PORT = process.env.PORT || 7000
const MONGO_URL = process.env.MONGO_URL

const allowedOrigins = ['http://localhost:3000', 'http://localhost:4200']
app.use(express.json())
app.use(
    cors({
        origin: function(origin, callback){
            // allow requests with no origin 
            // (like mobile apps or curl requests)
            if(!origin) return callback(null, true)
            if(allowedOrigins.indexOf(origin) === -1){
            var msg = 'The CORS policy for this site does not ' +
                        'allow access from the specified Origin.'
            return callback(new Error(msg), false);
            }
            return callback(null, true);
        }
    })
)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use('/users', userRoutes)
app.use('/exercises', exerciseRoutes)
app.use('/programs', programRoutes)
app.use('/workout-history', workoutHistoryRoutes)

// If there is a connection error ensure MongoDb is running locally
// Follow: Search services.msc in your device 
// Click start "MongoDB Server (MongoDB) to run the mongoDB server
// https://stackoverflow.com/questions/46523321/mongoerror-connect-econnrefused-127-0-0-127017
mongoose.connect(MONGO_URL).then(() => {
    console.log("Db is connected successfully")
    // if statement so that when running supertest it uses Port 0 (Port 0 means the first randomly available port)
    if (process.env.NODE_ENV !== 'test') {
        app.listen(PORT, () => {
            console.log(`Listening http://${PORT}`)
        })
    }
}).catch((error) => {
    console.log(error)
})


app.get('/', (req, res) => {
    res.send('Hello World from Express and MongoDb!')
})

module.exports = app
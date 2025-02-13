const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const ExerciseModel = require("../models/exercise")

router.get('/', async(req, res) => {
    try {
        const exercise = await ExerciseModel.find()
        res.status(200).send({
            exercise
        })
    } 
    catch (error) {
        res.status(500).send({
            message: `${error}`
        })
    }
})

router.get('/:id', async(req, res) => {
    const id = req.params.id

    try {
        const exercise = await ExerciseModel.findById(id)
        if(exercise) {
            res.status(200).send({
                exercise
            })
        }
        else {
            res.status(404).send({
                message: "Exercise not found"
            })
        }
    }
    catch (error){
        res.status(500).send({
            message: `${error}`
        })
    }
})

router.post('/', async(req, res) => {
    const newExercise = new ExerciseModel({ ...req.body })

    try {
        const insertedExcercise = await newExercise.save()
        res.status(201).json(insertedExcercise)
    }
    catch (error) {
        if(error instanceof mongoose.Error.ValidationError) {
            res.status(400).send({
                message: `${error}`
            })
        }
        else {
            res.status(500).send({
                message: `${error}`
            })
        }
    }
})
    
router.put('/:id', async(req, res) => {
    const id = req.params.id

    try {
        const exercise = await ExerciseModel.findById(id)

        if(exercise) {
            await ExerciseModel.findByIdAndUpdate(id, req.body)
            const updatedExercise = await ExerciseModel.findById(id)
            res.status(200).send({
                updatedExercise
            })
        }
        else {
            res.status(404).send({
                message: "Exercise not found"
            })
        }
    }
    catch (error) {
        if(error instanceof mongoose.Error.ValidationError) {
            res.status(400).send({
                message: `${error}`
            })
        }
        res.status(500).send({
            message: `${error}`
        })
    }
})

router.delete('/:id', async(req, res) => {
    const id = req.params.id

    try {
        const exerciseToDelete = await ExerciseModel.findById(id)
        if(exerciseToDelete) {
            await ExerciseModel.deleteOne(exerciseToDelete)
            res.status(200).send({
                message: "Exercise deleted successfully."
            })
        }
        else {
            res.status(404).send({
                message: "Exercise not found"
            })
        }
    }
    catch (error) {
        res.status(500).send({
            message: `${error}`
       })
    }
})

module.exports = router
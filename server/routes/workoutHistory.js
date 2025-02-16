const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const WorkoutHistoryModel = require("../models/workoutHistory")

router.get('/', async(req, res) => {
    try {
        const workoutHistory = await WorkoutHistoryModel.find()
        res.status(200).send({
            workoutHistory
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
        const workoutHistory = await WorkoutHistoryModel.findById(id)
        if(workoutHistory) {
            res.status(200).send({
                workoutHistory
            })
        }
        else {
            res.status(404).send({
                message: "Workout History not found"
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
    const newWorkoutHistory = new WorkoutHistoryModel({ ...req.body })

    try {
        const insertedExcercise = await newWorkoutHistory.save()
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
        const workoutHistory = await WorkoutHistoryModel.findById(id)

        if(workoutHistory) {
            await WorkoutHistoryModel.findByIdAndUpdate(id, req.body)
            const updatedWorkoutHistory = await WorkoutHistoryModel.findById(id)
            res.status(200).send({
                updatedWorkoutHistory
            })
        }
        else {
            res.status(404).send({
                message: "Workout History not found"
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
        const workoutHistoryToDelete = await WorkoutHistoryModel.findById(id)
        if(workoutHistoryToDelete) {
            await WorkoutHistoryModel.deleteOne(workoutHistoryToDelete)
            res.status(200).send({
                message: "Workout History deleted successfully."
            })
        }
        else {
            res.status(404).send({
                message: "Workout History not found"
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
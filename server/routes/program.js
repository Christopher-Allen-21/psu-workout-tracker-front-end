const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const ProgramModel = require("../models/program")

router.get('/', async(req, res) => {
    try {
        const program = await ProgramModel.find()
        res.status(200).send({
            program
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
        const program = await ProgramModel.findById(id)
        if(program) {
            res.status(200).send({
                program
            })
        }
        else {
            res.status(404).send({
                message: "Program not found"
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
    const newProgram = new ProgramModel({ ...req.body })

    try {
        const insertedExcercise = await newProgram.save()
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
        const program = await ProgramModel.findById(id)

        if(program) {
            await ProgramModel.findByIdAndUpdate(id, req.body)
            const updatedProgram = await ProgramModel.findById(id)
            res.status(200).send({
                updatedProgram
            })
        }
        else {
            res.status(404).send({
                message: "Program not found"
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
        const programToDelete = await ProgramModel.findById(id)
        if(programToDelete) {
            await ProgramModel.deleteOne(programToDelete)
            res.status(200).send({
                message: "Program deleted successfully."
            })
        }
        else {
            res.status(404).send({
                message: "Program not found"
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
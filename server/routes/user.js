const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const UserModel = require('../models/user.js')

router.get('/', async(req, res) => {
    try {
        const user = await UserModel.find()
        res.status(200).send({
            user
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
        const user = await UserModel.findById(id)
        if(user) {
            res.status(200).send({
                user
            })
        }
        else {
            res.status(404).send({
                message: "User not found"
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
    const newUser = new UserModel({ ...req.body })

    try {
        const insertedUser = await newUser.save()
        res.status(201).json(insertedUser)
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
        const user = await UserModel.findById(id)

        if(user) {
            await UserModel.findByIdAndUpdate(id, req.body)
            const updatedUser = await UserModel.findById(id)
            res.status(200).send({
                updatedUser
            })
        }
        else {
            res.status(404).send({
                message: "User not found"
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
        const userToDelete = await UserModel.findById(id)
        if(userToDelete) {
            await UserModel.deleteOne(userToDelete)
            res.status(200).send({
                message: "User deleted successfully."
            })
        }
        else {
            res.status(404).send({
                message: "User not found"
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
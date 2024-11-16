// const fs = require('fs')
const model = require('../model/user')
const mongoose = require('mongoose')
const User = model.User


//getAllUsers
exports.getUsers = async (req, res) => {
    try {
        const doc = await User.find()
        console.log(doc)
        res.json({ Users: doc })
    }
    catch (err) {
        console.log(err)
        res.json({ error: err.message })
    }
}

//getUser
exports.getUser = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await User.findById(id)
        console.log(doc)
        res.json({ User: doc })
    }
    catch (err) {
        console.log(err)
        res.json({ error: err.message })
    }
}

//replaceUser
exports.replaceUser = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await User.findOneAndReplace({ _id: id }, req.body, { new: true })
        console.log(doc)
        res.json({ message: 'User replaced successfully', User: doc })
    }
    catch (err) {
        console.log(err)
        res.json({ error: err.message })
    }
}

//updateUser
exports.updateUser = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await User.findOneAndUpdate({ _id: id }, req.body, { new: true })
        console.log(doc)
        res.json({ message: 'User updated successfully', User: doc })
    }
    catch (err) {
        console.log(err)
        res.json({ error: err.message })
    }
}

//deleteUser
exports.deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await User.findByIdAndDelete({ _id: id })
        console.log(doc)
        res.json({ message: 'User deleted successfully', User: doc })
    }
    catch (err) {
        console.log(err)
        res.json({ error: err.message })
    }
}
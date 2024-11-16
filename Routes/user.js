const express = require('express')
const userController = require('../Controller/user')

const router = express.Router()

router
    .get('/', userController.getUsers)
    .get('/:id', userController.getUser)
    .put('/:id', userController.replaceUser)
    .patch('/:id', userController.updateUser)
    .delete('/:id', userController.deleteUser)

exports.router = router
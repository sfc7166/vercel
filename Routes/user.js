const express = require('express')
const userController = require('../Controller/user')

const router = express.Router()

router
    .get('/', userController.getusers)
    .get('/:id', userController.getuser)
    .post('/', userController.createuser)
    .put('/:id', userController.replaceuser)
    .patch('/:id', userController.updateuser)
    .delete('/:id', userController.deleteuser)

exports.router = router
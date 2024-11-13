const express = require('express')
const productController = require('../Controller/product')

const router = express.Router()

router
    .get('/', productController.getProducts)
    .get('/:id', productController.getProduct)
    .post('/', productController.createProduct)
    .put('/:id', productController.replaceProduct)
    .patch('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct)

exports.router = router
const express = require('express')
const productController = require('../Controller/product')

const router = express.Router()

router
    .post('/', productController.createProduct)
    .get('/ssr', productController.getProductsSSR)
    .get('/add', productController.getAddForm)
    .get('/', productController.getProducts)
    .get('/:id', productController.getProduct)
    .put('/:id', productController.replaceProduct)
    .patch('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct)

exports.router = router
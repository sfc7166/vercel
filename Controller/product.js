const model = require('../model/product')
const Product = model.Product
const ejs = require('ejs')
const path = require('path')

//view 
exports.getProductsSSR = async (req, res) => {
    try {
        const doc = await Product.find()
        ejs.renderFile(path.resolve(__dirname, '../pages/index.ejs'), { products: Product }, function (err, str) {
            // console.log(doc)
            res.send(str)
        })

    }
    catch (err) {
        console.log(err)
        res.json({ error: err.message })
    }
}



//createProduct
exports.createProduct = async (req, res) => {
    const product = new Product(req.body)
    try {
        const doc = await product.save()
        console.log({ product: doc })
        res.json({ message: 'product added successfully', product: doc })
    }
    catch (err) {
        console.log(err)
        res.json({ error: err.message })
    }
}

//getAllProducts
exports.getProducts = async (req, res) => {
    try {
        const doc = await Product.find()
        console.log(doc)
        res.json({ products: doc })
    }
    catch (err) {
        console.log(err)
        res.json({ error: err.message })
    }
}

//getProduct
exports.getProduct = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await Product.findById(id)
        console.log(doc)
        res.json({ product: doc })
    }
    catch (err) {
        console.log(err)
        res.json({ error: err.message })
    }
}

//replaceProduct
exports.replaceProduct = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await Product.findOneAndReplace({ _id: id }, req.body, { new: true })
        console.log(doc)
        res.json({ message: 'product replaced successfully', product: doc })
    }
    catch (err) {
        console.log(err)
        res.json({ error: err.message })
    }
}

//updateProduct
exports.updateProduct = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
        console.log(doc)
        res.json({ message: 'product updated successfully', product: doc })
    }
    catch (err) {
        console.log(err)
        res.json({ error: err.message })
    }
}

//deleteProduct
exports.deleteProduct = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await Product.findByIdAndDelete({ _id: id })
        console.log(doc)
        res.json({ message: 'product deleted successfully', product: doc })
    }
    catch (err) {
        console.log(err)
        res.json({ error: err.message })
    }
}
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


exports.getAddForm = async (req, res) => {
    try {
        ejs.renderFile(path.resolve(__dirname, '../pages/add.ejs'), function (err, str) {
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
        let query = Product.find();

        // Apply sorting if sort and field parameters are present
        if (req.query.sort && req.query.field) {
            const sortField = req.query.field; // Field to sort by
            const sortValue = parseInt(req.query.sort); // Ascending (1) or Descending (-1)

            // Validate sortValue
            if (isNaN(sortValue) || (sortValue !== 1 && sortValue !== -1)) {
                throw new Error("Invalid sort value. Use 1 for ascending or -1 for descending.");
            }

            // Dynamic sorting
            const sortObject = {};
            sortObject[sortField] = sortValue;
            query = query.sort(sortObject);
        }

        // Apply limit if the limit parameter is present
        if (req.query.limit) {
            const limitValue = parseInt(req.query.limit);

            // Validate limitValue
            if (isNaN(limitValue) || limitValue <= 0) {
                throw new Error("Invalid limit value. Use a positive integer.");
            }

            query = query.limit(limitValue);
        }

        const products = await query.exec();
        res.json({ products });
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
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
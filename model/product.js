const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({

    title: { type: String, required: true, unique: true },
    description: { String },
    price: { type: Number, min: [1, 'wrong min price'] },
    discountPercentage: { type: Number, min: [10, 'wrong min discount'], max: [40, 'wrong max discount'] },
    rating: { type: Number, min: [0, 'wrong min rating'], max: [5, 'wrong max rating'] },
    brand: { type: String },
    category: { type: String },
    thumbnail: { type: String },
    images: [String]

})

exports.Product = mongoose.model('Product', productSchema)
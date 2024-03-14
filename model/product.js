const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: [true, "price must be provided"],
    },
    featured: {
        type: Boolean,
        default: true,
    },
    rating: {
        type: Number,
        default: Date.now()
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "mi"],
            message: '{value} is not Supported'
        }
    }
})


module.exports = mongoose.model("Product", productSchema)
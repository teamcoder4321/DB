import mongoose from "mongoose "

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    total: {
        type: Number,
        required: true
    },

})



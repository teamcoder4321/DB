import mongoose from "mongoose"

const orderItemsSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },   
    status: {
        type: String,
        default: "Pending"
    },
    total: {
        type: Number,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    payment: {
        type: String,
        required: true
    },
    paymentId: {
        type: String
    },
    paymentStatus: {
        type: String
    },
    paymentDate: {
        type: Date
    },
    paymentAmount: {
        type: Number
    },
    paymentCurrency: {
        type: String
    },
    paymentEmail: {
        type: String
    },
}, {timestamp: true})

export default mongoose.model("OrderItems", orderItemsSchema)
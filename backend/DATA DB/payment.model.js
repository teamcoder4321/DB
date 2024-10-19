import mongoose from "mongoose"

const paymentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
},{})

export default mongoose.model("Payment", paymentSchema)
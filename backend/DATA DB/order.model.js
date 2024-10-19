import mongoose from "mongoose"

const orderSchema = new mongoose.orderSchema({ 
    name: String,
    email: String,
    address: String,
    country: String,
    city: String,
    state: String,
    zip: String,
    items: Array,
    total: Number
}, {timestamp : true})

export default mongoose.model("Order", orderSchema)


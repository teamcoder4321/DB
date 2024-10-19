import mongoose from "mongoose"

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    },
    orderItems: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderItems"
    },
    payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment"
    },
    paymentItems: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PaymentItems"
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart"
    },
    wishlist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Wishlist"
    },
    coupon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coupon"
    },
    

    
} , {timestamp: true} )

export default mongoose.model("Customer", customerSchema)

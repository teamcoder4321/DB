import mongoose from "mongoose"

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    
    },
    role: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        default: null
    },
    deleted: {
        type: Boolean,
        default: false
    },
    __v: {
        type: Number,
        select: false
    },
    // Add the following line
    isDeleted: {
        type: Boolean,
        default: false
    },


} , { timestamps: true })

export default mongoose.model("admin", adminSchema)
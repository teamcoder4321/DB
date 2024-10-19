import mongoose from "mongoose"

const stafSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "staf",
    },  
    
    date: {
        type: Date,
        default: Date.now,
    },


} , {timestamp: true})

export default mongoose.model("Staf", stafSchema)
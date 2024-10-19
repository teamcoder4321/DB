import mongoose from "mongoose"

const couponSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    count: { type: Number, required: true },
    image: { type: String, required: true },
})  


export default mongoose.model("Coupon", couponSchema)
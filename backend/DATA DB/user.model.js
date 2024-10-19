import mongoose from "mongoose"

const userSchema = new mongoose.userSchema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    address:{
        type:String
    },
    contact:{
        type:Number
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    otp:{
        type:String
    },
    cart:{
        type:Array,
        default:[]
    },
    wishlist:{
        type:Array,
        default:[]
    },
    orders:{
        type:Array,
        default:[]
    },
    refreshToken:{
        type:String
    },
    token:{
        type:String
    },
    image:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    isDeleted:{
        type:Boolean,
        default:false
    },


},{})

export default mongoose.model("user",userSchema)
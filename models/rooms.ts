import mongoose from "mongoose"

export const userSchema = new mongoose.Schema({
    status:String,
    email:String,
})

export const Room =    mongoose.model("Room",userSchema) 
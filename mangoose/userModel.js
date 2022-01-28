const express=require("express")
const app=express()
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://Sasidhar:Mantha@123@cluster0.y6dwk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true})
const User=mongoose.model("publications",{
    author:String,
    password:String,
    userName:String
})
const user1=new User(
    {
        author:"mgh",
        password:"pass234",
        userName:"TMH"

    },
    {
        
        author:"agarwal",
        password:"pass000",
        userName:"GSA"
    }
)
user1.save().then(()=>console.log("user added successfully"))
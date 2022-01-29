const express = require("express")
const router = express.Router()
const User = require("../models/userModel")
const logger = require("../loggerMw")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.post('/signin', async(req, res)=>{
    const data = req.body
    const user = await User.findOne({email:data.email})
    console.log(user)
    const authenticate = await bcrypt.compare(data.password, user.password)
    if(authenticate){
        const token = await jwt.sign({email:data.email}, "rp17")
        console.log(token)
        const signinInfo = {
            msg:"Logged in successfully",
            jwttoken:token
        }
        res.send(signinInfo)
    }
    else{
        res.send("invalid email/password")
    }
})

module.exports = router
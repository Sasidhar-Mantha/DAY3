const express = require("express")
const router = express.Router()
const User = require("../models/userModel")
const logger = require("../loggerMw")
const bcrypt = require("bcrypt")

router.post("/signup", async (req, res)=>{
    const data = req.body
    const passHash = await bcrypt.hash(data.password, 7)
    console.log(passHash)
    data.password = passHash
    const user1 = new User(data)
    user1.save().then(()=>{
        res.send("User created successfully")
    }).catch((error)=>{
        console.log("error")
        res.send(error)
    })
})

module.exports = router
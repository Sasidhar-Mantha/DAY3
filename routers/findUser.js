const express = require("express")
const router = express.Router()
const logger = require("../loggerMw")
const User = require("../models/userModel")

router.get("/findall",async(req, res)=>{
    const result = await User.find().select({"password":0})
    console.log(result)
    res.send(result)
})

module.exports = router
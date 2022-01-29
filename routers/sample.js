const express = require("express")
const router = express.Router()
const {logger} = require("../logger")


router.get('',loggerMw,(req, res)=>{
    // console.log(req.query)
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

router.get("/products", loggerMw, (req,res)=>{
    res.sendFile(path.join(__dirname,"../public/products.html"))
})

module.exports = router
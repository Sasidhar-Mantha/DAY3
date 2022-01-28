const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require('body-parser')
const {loggerMw} = require("./loggerMw")

app.use(bodyParser.json())

app.get('',loggerMw,(req, res)=>{
    // console.log(req.query)
    res.sendFile(path.join(__dirname,"/public/index.html"))
})

app.get("/products", loggerMw, (req,res)=>{
    res.sendFile(path.join(__dirname,"/public/products.html"))
})

// get parameters from url
app.get("/products/:prname", loggerMw, (req, res)=>{
    console.log(req.params)
    res.send(req.params)
})

app.post("/posturl", loggerMw, (req, res)=>{
    console.log(req.body)
    res.send("success")
})

// Handles for routes not present on the server.
// Wildcard character '*'
app.get('*', (req, res)=>{
    res.status(404).send("404 page not found")
})

app.listen(3000, ()=>{
    console.log("Server running at port 3000")
})
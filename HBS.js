const express = require("express")
const app = express()

app.set("view engine", "hbs")

app.get("", (req, res)=>{
    res.status(200).render("home",{username:"peter"} )
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})
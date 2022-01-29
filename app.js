const express = require ('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/rp17'
const app=express()





mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection


con.on('open',function (){
    console.log('***CONNECTED***')
})

const allienRouter= require('./routers/rp17')
app.use('/rp17',allienRouter)

app.listen(9000,function(){
    console.log('Server started')
})
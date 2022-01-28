const fs = require("fs")
const path = require("path")

const logger = (req, res, next)=>{
    log = {
        "method":req.method,
        "url":req.url,
        "date":new Date().toDateString(),
        "time":new Date().toTimeString()
    }
    fs.appendFileSync(path.join(__dirname,'./data/log-data.txt'), "\n"+JSON.stringify(log))
    next()
}

module.exports = {logger}
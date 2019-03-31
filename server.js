const express = require('express')
const port = process.env.port || 4444
const server = express()

server.get('/',(req,res) =>{
res.send('hello world')
})



    server.listen(port)

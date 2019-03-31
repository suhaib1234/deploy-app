const express = require('express')
const port = process.env.port || 8690
const server = express()

server.get('/',(req,res) =>{
res.send('hello :- my name is suhaib')
})



    server.listen(port)

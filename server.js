const express = require('express');
var cors = require("cors")
const path = require('path');
const port = process.env.PORT || 8080
const bodyParser = require("body-parser");

const server =  express();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/login", function (req, res) {
   return res.send({message:'success'})
});
server.use((err, req, res, next)=> {
    return res.status(500).send("something went wrong...");
})
console.log(`Server is listening to port: ${port}`);
server.listen(port);
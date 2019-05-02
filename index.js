const express = require("express");
const http = require("http");
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

app.get('/scrape', function (req, res) {

    //All the web scraping magic will happen here
    res.send("200");
    
})

//Setting up server
const server = http.createServer(app);
server.listen(8888, () => {
    console.log(` Server started on port: ${server.address().port}`)
});
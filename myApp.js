var express = require('express');

require('dotenv').config()
var app = express();
console.log("Hello World");

// files
const filePath = `${__dirname}/views/index.html`;
const staticPath = `${__dirname}/public`;

// global middlewares
app.use('/public', express.static(staticPath));

app.get("/", function (req, res) {
  // res.send("Hello Express");
  res.sendFile(filePath);
});

app.get("/json", (req, res) => {
  let response = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = response.toUpperCase();
  }

  res.json({ message: response });
});































 module.exports = app;

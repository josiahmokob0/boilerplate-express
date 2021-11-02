const express = require('express');
const app = express();

const home = require("./routes");
const chainingMiddleware = require("./routes/chaining-middleware");
const routing = require("./routes/routes");
const routeParameter = require("./routes/route-parameter");
const queryParameter = require("./routes/query-parameter");

const logger = require("./middlewares/logger");
require('dotenv').config()

const staticPath = `${__dirname}/public`;
const filePath = `${__dirname}/views/index.html`;

// global middlewares
app.use('/public', express.static(staticPath));
app.use(logger);

home(filePath, app);
chainingMiddleware(app);
routing(app);
routeParameter(app);
queryParameter(app);



























 module.exports = app;

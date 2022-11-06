require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();

const setupDB = require('./setup/db');
const routes = require('./src/routes');

const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// setup
setupDB();

// register routes
app.use(routes);

// catch 404
app.use(require('./src/middlewares/errorHandling/404.middleware'));

// error handler
app.use(require('./src/middlewares/errorHandling/errorHandler.middleware'));

module.exports = app;

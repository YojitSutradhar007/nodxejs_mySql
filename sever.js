const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const testRoute = require('./routes/demo_route');
const SqRoute = require('./routes/Sq_route');


app.use((req, res, next) => {
    console.log("ok")
    next();
})
// give the status of the request
app.use(morgan('dev'));
// user to ssend a data to body 
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/demo', testRoute);
app.use('/demoSq', SqRoute);

// middle ware

app.use((req, res) => {
    res.send("Error: ")
})

module.exports = app
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
    console.log("connected to database" +config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const app = express();

const getcustomerdetails = require('./routes/getcustomerdetails');
// const myairlines = require('./routes/myairlines');
// const userratingcomments = require('./routes/userratingcomments');

//Port Number
const port = 3000;

//CORS middleware
app.use(cors());

//Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// require('./config/passport')(passport);

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.json());

app.use('/getcustomerdetails', getcustomerdetails);

//Index route
app.get('/', (req, res, next) => {
    res.send('invalid endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Start server
app.listen(port, () => {
    console.log('Server started on port'+port);
});

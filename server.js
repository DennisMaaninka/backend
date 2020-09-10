const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
//app.use(bodyParser.json());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB databas connection established successfully");
});

const toursRouter = require('./routes/tours');
const usersRouter = require('./routes/users');

app.use('/tours', toursRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log('server is running on port: ${port}');
});







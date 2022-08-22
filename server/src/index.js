const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const URI_CONNECT = 'mongodb+srv://admin:rNJt0EIskQSUjYn1@cluster0.rkkex.mongodb.net/?retryWrites=true&w=majority';



//Can use middleware
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

//HTTP request logger
app.use(morgan('combined'));

app.get('/tin-tuc', function (req, res) {
    res.send('hello, world!')
  })

//Connect to DB
mongoose.connect(URI_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to DB");
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
        })
    })
    .catch(err => {
        console.log(err);
    })




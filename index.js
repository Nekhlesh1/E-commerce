const express = require('express');
const port = 3001;
const app = express();
const db = require('./config/mongoose')
app.use('/', require('./routes/index'));

app.listen(port, (err) => {
    if (err) {
        console.log("Error connecting to server!!", err);
        return;
    }
    console.log("Successfully connected to port: ", port);
})
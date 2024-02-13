const express = require("express");
const cors = require("cors");
const app= express();
app.use(cors());
const mongoose = require("mongoose")
const port = 5000;
const url = "mongodb://localhost:27017/";
const databasename = "secureWebTest";

mongoose.connect(`${url}${databasename}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});



app.listen(port, () => console.log("server is running"));



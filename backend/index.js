// app.js

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user.route");
const postRoutes = require("./routes/post.route");
const blogRoutes = require("./routes/blog.route");

const app = express();

// Middleware
app.use(cors());

// Connection to MongoDB
const url = "mongodb://localhost:27017/";
const databasename = "secureWebTest";

mongoose.connect(`${url}${databasename}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api', userRoutes);
app.use('/api', postRoutes);
app.use('/api', blogRoutes);

// Start server
const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

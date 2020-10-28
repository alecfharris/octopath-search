const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const weaponsRoutes = require('./routes.js');
const dotenv = require("dotenv");

dotenv.config();

const dbUrl = process.env.MONGO_URI;

app.use(cors());
app.use(bodyParser.json());
app.use('/weapons', weaponsRoutes);




mongoose.connect(dbUrl, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})
app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});
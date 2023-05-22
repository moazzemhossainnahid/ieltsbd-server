const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const colors = require("colors");
const mongoose = require('mongoose');
require('dotenv').config();
app.use(cors());
app.use(express.json());


// import routes
const usersRoute = require('./v1/Routes/users.route');
const instructorsRoute = require('./v1/Routes/instructors.route');
const beinstructorRoute = require('./v1/Routes/beinstructor.route');
const contactsRoute = require('./v1/Routes/contacts.route');




// declare routes
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/instructors', instructorsRoute);
app.use('/api/v1/beinstructor', beinstructorRoute);
app.use('/api/v1/contacts', contactsRoute);




app.get("/", (req, res) => {
    try {
        res.send("Welcome to IELTS-BD Server");
    } catch (error) {
        console.log(error.message);
    };
});

app.all("*", (req, res) => {
    try {
        res.send("No Routes Found");
    } catch (error) {
        console.log(error.message);
    };
});


app.listen(PORT, () => {
    try {
        console.log(`server is successfully running on port ${PORT}!`.white.bold);
    } catch (error) {
        console.log(error.message);
    };
});

exports = app;
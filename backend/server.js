require('dotenv').config()

const express = require('express')
const session = require('express-session')
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")

// express app
const app = express()

app.use(cors());  // Enable CORS
app.use(express.json());  // JSON

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server after successful MongoDB connection
        app.listen(process.env.PORT, () => {
        console.log('Server is running on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error);
    });


// Login route
const loginRoute = require('./routes/login');
app.use('/login', loginRoute);

// Register route
const registerRoute = require('./routes/register');
app.use('/register', registerRoute);

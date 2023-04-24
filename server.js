const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

// load env vars
dotenv.config({ path: './config/config.env'});

// connect to database
connectDB();

//Routers file
const bootcamps = require('./routers/bootcamps');

const app = express();

// Body parser
app.use(express.json())

// dev logging middleware
if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}

// Mounts router
app.use('/api/v1/bootcamps', bootcamps)

app.get('/', (req, res) => {
    res.status(200).json({
        success: false
    })
})

const PORT = process.env.PORT || 5000;

app.listen(
    PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
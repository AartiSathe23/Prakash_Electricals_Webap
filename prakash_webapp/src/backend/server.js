const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = process.env.MONGODB_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Define routes
const adminRouter = require('./routes/Admin_Router');
const custRouter = require('./routes/Cust_Router');

app.use('/admin', adminRouter);
app.use('/customer', custRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

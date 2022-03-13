const mysql = require("mysql2");
const dotenv = require('dotenv');

// initialize dotenv
dotenv.config();

// adding password const
const password = process.env.password;

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: process.env.password,    
    database: 'employee_tracker'
  });

  module.exports = db;
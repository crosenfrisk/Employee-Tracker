// for connecting to mysql
const connection = require('../db/connection');

const viewAllDepartments = (cb) => {
    const query = `SELECT * FROM departments(id, dept_name)`;
    connection.query(query, (err, res) => {
    // add whatever I need.
    cb();
    })
}

const addDepartment = () => `INSERT INTO departments (name) VALUES(?)`;

module.exports = { viewAllDepartments, addDepartment };
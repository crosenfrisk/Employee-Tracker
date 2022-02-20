// import connection to database
const connection = require('./connection');

viewAllDepartments = () => {
    const sql = `SELECT * FROM departments(id, dept_name)`;
};

addDepartment = () => {
    const sql = `INSERT INTO departments (name)
    VALUES(?)`;
};
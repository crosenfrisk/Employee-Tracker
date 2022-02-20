// import connection to database
const connection = require('./connection');

viewAllEmployees = () => {
    const sql = `SELECT * FROM employees (first_name, last_name, role_id, manager_id)
    VALUES(?,?,?,?)`;
}

addEmployee = () => {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES(?,?,?,?)`;
};
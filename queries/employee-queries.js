const viewAllEmployees = () => `SELECT * FROM employees (first_name, last_name, role_id, manager_id)
    VALUES(?,?,?,?)`;

const addEmployee = () => `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES(?,?,?,?)`;

module.exports = { viewAllEmployees, addEmployee };
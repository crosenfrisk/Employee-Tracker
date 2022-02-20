// import connection to database
const connection = require('./connection');

viewAllRoles = () => {
    const sql = `SELECT * FROM roles (id, title, salary, dept_id)`;
};

addRoleText = () => {
    const sql = `INSERT INTO roles (title, salary, department_id)
    VALUES(?,?,?)`;
};

module.exports = rolesQueries;
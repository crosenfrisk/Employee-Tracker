const viewAllRoles = () => `SELECT * FROM roles (id, title, salary, dept_id)`;

const addRoleText = () => `INSERT INTO roles (title, salary, department_id)
    VALUES(?,?,?)`;

module.exports = { viewAllRoles, addRoleText };
const { viewAllRoles, addRoleText } = require('./roles-queries');
const { viewAllDepartments, addDepartment } = require('./departments-queries');
const { viewAllEmployees, addEmployee } = require('./employee-queries');

module.exports = {viewAllRoles, addRoleText, viewAllDepartments, addDepartment, viewAllEmployees, addEmployee};
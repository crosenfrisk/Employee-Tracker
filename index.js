// ----- Requirements & Imports ----- //

const seeds = require('./db/seeds.sql');
const db = require ('./db/connection.sql');
const { write } = require('fs');

// NPM Packages
const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const cTable = require('console.table');

// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: 

const startApp = async => {
    return inquirer.prompt([
// Primary options include: view all departments, view all roles, view all employees, 
// Secondary options include: add a department, add a role, add an employee, 
// Tertiary option: update an employee role
      {
        type: 'list',
        name: 'viewAddOrUpdate',
        message: 'What would you like to do?',
        choices: [
            "View All Departments", 
            "View All Roles", 
            "View All Employees",
            // "View Employees by Manager",
            // "View Employees by Department",
            // "View Total Utilized Budget of a Department",
            new inquirer.Separator(),
            "Add a department",
            "Add a role",
            "Add an employee",
            new inquirer.Separator(),
            "Update an employee role",
            "Update employee managers",
            // new inquirer.Separator(),
            // "Delete department",
            // "Delete role",
            // "Delete employee" 
        ]
    }
    ])
.then(answers => {
    // let seeds = '';
    // if (answers === '') {

    // }
    console.log(answers);
});
}; 

startApp();


// WHEN I choose to view all departments
// const viewAllDepartments = () => {
//     const sql = `DESCRIBE departments(id, dept_name)`;
// };
// THEN I am presented with a formatted table showing department names and department ids



// WHEN I choose to view all roles
// const viewAllRoles = () => {
//     const sql = `DESCRIBE roles(title, id, salary, dept_id)`;
// };
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role


// WHEN I choose to view all employees
// const viewEmployees = () => {
//      const sql = `DESCRIBE employees(id, first_name, last_name, role_id, manager_id) OUTER JOIN WITH roles(title, dept_id, salary) 
// };
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to


// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

// Try to add some additional functionality to your application, such as the ability to do the following:

// Update employee managers.

// View employees by manager.

// View employees by department.

// Delete departments, roles, and employees.

// View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.
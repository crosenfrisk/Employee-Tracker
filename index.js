// ----- Requirements & Imports ----- //
// const db = require("./db/connection");
// const seeds = require("./db/seeds.sql");
const {addDepartment} = require('./queries');

// NPM Packages
const inquirer = require("inquirer");
// const mysql2 = require("mysql2");
// const cTable = require("console.table");

// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options:

// Prompts for collecting data, starting with employee:

createEmployee = async () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "empFirstName",
        message: "Please enter your the employee's first name. (Required)",
        validate: (empFirstName) => {
          if (empFirstName) {
            return true;
          } else {
            console.log("You must enter a first name for your employee!");
          }
        },
      },
      {
        type: "input",
        name: "empLastName",
        message: "Please enter your the employee's last name. (Required)",
        validate: (empLastName) => {
          if (empLastName) {
            return true;
          } else {
            console.log("You must enter a last name for your employee!");
          }
        },
      },
      {
        type: "list",
        name: "empRole",
        message: "Please select your the employee's role: ",
        choices: [
          "Specialty Support",
          "Associate Engineer",
          "Lead Engineer",
          "Development Manager",
          "Project Manager",
          "Support Manager",
          "Salesperson",
          "General Counsel",
          "Human Resources Manager",
        ],
      },
      {
        type: "input",
        name: "empManager",
        message: "Please select your the employee's manager, if applicable: ",
        choices: [
          "Development Manager",
          "Project Manager",
          "Support Manager",
          "None",
        ],
      },
    ])
    .then(({ empFirstName, empLastName, empRole, empManager }) => {
      const employeeData = {
        first_name: empFirstName,
        last_name: empLastName,
        role_id: empRole,
        manager_id: empManager,
      };
      createEmployee(employeeData);
    });
};

// // Prompt to create a department entry
chooseDepartment = async () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "departmentName",
      message: "Which department would you like to select?",
      choices: [
        "Support",
        "Development",
        "Management",
        "Sales",
        "Legal",
        "Human Resources",
      ],
    },
  ])
  .then(({departmentName})=> {
      const selectedDepartment = {dept_name: departmentName};
      chooseDepartment(selectedDepartment);
  });
};

// // Prompt to add a new role entry
addNewRole = async () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "roleTitle",
        message: "Which role would you like to choose?",
        choices: [
            "Specialty Support",
            "Associate Engineer",
            "Lead Engineer",
            "Development Manager",
            "Project Manager",
            "Support Manager",
            "Salesperson",
            "General Counsel",
            "Human Resources Manager",
        ],
      },
      {
        type: "input",
        name: "roleSalary",
        message: "Please enter the salary of the role.",
      },
      {
        type: "input",
        name: "roleDepartment",
        message: "Which department does this role belong to?",
        choices: [
            "Support",
            "Development",
            "Management",
            "Sales",
            "Legal",
            "Human Resources",
        ],
      },
    ])
    .then(({roleTitle, roleSalary, roleDepartment}) => {
        const newRoleData = {title: roleTitle, salary: roleSalary, dept_id: roleDepartment};
        addNewRole(newRoleData);
    });
  };

const startApp = async () => {
  console.log(`
   ==========================================================================
   Welcome to Employee Tracker CLI. Please select from the following prompts:
   ==========================================================================`);

  return inquirer.prompt([
    // Primary options include: view all departments, view all roles, view all employees
    {
      type: "list",
      name: "primaryOptions",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        new inquirer.Separator(),
        "View Employees by Manager",
        "View Employees by Department",
        "View Total Utilized Budget of a Department",
        new inquirer.Separator(),
        "Add a department",
        "Add a role",
        "Add an employee",
        new inquirer.Separator(),
        "Update an employee role",
        "Update employee managers",
        new inquirer.Separator(),
        "Delete department",
        "Delete role",
        "Delete employee"
      ],
    },
  ]);
  //     .then((answers) => {
  //       // let seeds = '';
  //       // if (answers === '') {

  //       // }
  //       console.log(JSON.stringify(answers, null, '  '));
  //     });
};

startApp().then((answers) => {
  // if View all Departments
  viewAllDepartments();
  // if View all Roles
  // if View all Employees
  // if View Employees by Manager
  // if View Employees by Department
  // if View Total Utilized Budget of a Department

  // if Add a department
  // if Add a role
  // if Add an employee

  // if Update an employee role
  // if Update employee managers
  
  // if Delete department
  // if Delete role
  // if Delete employee
  // 
  console.log(answers);
});

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

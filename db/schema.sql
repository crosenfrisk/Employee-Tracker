-- Prevents a table from being created more than once
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

-- Department table will have an id as a primary key 
-- and a name field for each department.
CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

-- Role table will have an id as the primary key, title, salary, 
-- and department id to connect as foregin key to department id table

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    dept_id INTEGER,
    CONSTRAINT fk_departments FOREIGN KEY (dept_id) REFERENCES departments(id) ON DELETE SET NULL
);

-- Employee table with id as primary key
-- each employee will have a field for first and last name
-- a role_id linked to role table
-- and a manager_id linked to the employee table.

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    CONSTRAINT fk_roles FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
    CONSTRAINT fk_manager_id FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);

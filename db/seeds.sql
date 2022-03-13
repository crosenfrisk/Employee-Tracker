INSERT INTO departments (dept_name)
VALUES
('Support'),
('Development'),
('Management'),
('Sales'),
('Legal'),
('Human Resources');

INSERT INTO roles (title, salary, dept_id)
VALUES
('Specialty Support', 45000, 1),
('Associate Engineer', 80000, 2),
('Lead Engineer', 100000, 2),
('Development Manager', 120000, 3),
('Project Manager', 100000, 3),
('Support Manager', 80000, 3),
('Salesperson', 50000, 4),
('General Counsel', 17000, 5),
('Human Resources Manager', 95000, 6);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('Winne','Delacroux',1,NULL),
('Horatio','Maxweell',1,1),
('Colline','Glennon',1,NULL),
('Meggy','Melby',1,NULL),
('Hendrik','Olcot',2,NULL),
('Marsiella','Colwill',2,NULL),
('Darcy','Tuffrey',2,NULL),
('Audy','Bratton',3,NULL),
('Eyde','Titcumb',3,NULL),
('Alberta','Smyley',4, NULL),
('Viviene','Antony',5,NULL),
('Dulcy','Ralphs',6,NULL),
('Rubia','Flucker',7,NULL);


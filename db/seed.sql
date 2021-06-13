USE employee_tracker;

INSERT INTO department (name)
VALUES ("sales"),
        ("engineer"),
        ("accountant"),
        ("lawyer");

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Sales", 50000, 1)        
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 80000, 2)        
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 60000, 3)        
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team", 100000, 4)        
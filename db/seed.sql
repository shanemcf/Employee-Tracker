USE employee_tracker;

INSERT INTO department (name)
VALUES ("sales"),
        ("engineer"),
        ("accountant"),
        ("lawyer");

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Sales", 50000, 1);        
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 80000, 2);       
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 60000, 3);        
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team", 100000, 4);        

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Doe", 2, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Shane", "McFadden", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ash", "Ketchum", 3, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jimmy", "Neutron", 4, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jack", "Beans", 3, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Abigail", "Facio", 4, 3);


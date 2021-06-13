const mysql = require("mysql2");
const inquirer = require("inquirer");
const table = require("console.table");

const db = mysql.createConnection({
  host: "localhost",
  // MySQL username,
  user: "root",
  // MySQL password
  password: "root",
  database: "employee_tracker",
});
db.connect(function (err) {
    if (err) throw err;
  console.log(`Connected to the employee_tracker database.`);
//   db.query("SELECT * FROM department", function (err, results) {
//     if (err) throw err;
//     console.log(results);
//   });
});

function questions() {
    inquirer.prompt({
        message: "what would you like to do?",
        type: "list",
        choices: [
            "view all of the employees",
            "view all of the departments",
            "add an employee",
            "add a department",
            "add a role",
            "update an employee role",
            "quit"
        ],
        name: "choice"
    }).then(answers => {
        console.log(answers.choice);
        switch (answers.choice) {
            case "view all of the employees":
                viewEmployees()
                break;

            case "view all of the departments":
                viewDepartments()
                break;

            case "add an employee":
                addEmployee()
                break;

            case "add a department":
                addDepartment()
                break;

            case "add a role":
                addRole()
                break;

            case "update an employee role":
                updateEmployeeRole();
                break;

            default:
                db.end()
                break;
        }
    })
}

function viewEmployees() {
    db.query("SELECT * FROM employee", function (err, data) {
        console.table(data);
        questions();
    })
}

function viewDepartments() {
    db.query("SELECT * FROM department", function (err, data) {
        console.table(data);
        questions();
    })
}

function addEmployee() {
    inquirer.prompt([{
            type: "input",
            name: "firstName",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employee's last name?"
        },
        {
            type: "number",
            name: "roleId",
            message: "What is the employee's role ID"
        },
        {
            type: "number",
            name: "managerId",
            message: "What is the employee's manager's ID?"
        }
    ]).then(function(res) {
        db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, data) {
            if (err) throw err;
            console.table("Successfully Inserted");
            questions();
        })
    })
}

function addDepartment() {
    inquirer.prompt([{
        type: "input",
        name: "department",
        message: "Which Department did you want to add?"
    }, ]).then(function(res) {
        db.query('INSERT INTO department (name) VALUES (?)', [res.department], function(err, data) {
            if (err) throw err;
            console.table("Successful");
            questions();
        })
    })
}

function addRole() {
    inquirer.prompt([
        {
            message: "enter title:",
            type: "input",
            name: "title"
        }, {
            message: "enter salary:",
            type: "number",
            name: "salary"
        }, {
            message: "enter department ID:",
            type: "number",
            name: "department_id"
        }
    ]).then(function (response) {
        db.query("INSERT INTO roles (title, salary, department_id) values (?, ?, ?)", [response.title, response.salary, response.department_id], function (err, data) {
            console.table(data);
        })
        questions();
    })

}

function updateEmployeeRole() {
    inquirer.prompt([
        {
            message: "which employee would you like to update? (use first name only for now)",
            type: "input",
            name: "name"
        }, {
            message: "enter the new role ID:",
            type: "number",
            name: "role_id"
        }
    ]).then(function (response) {
        db.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [response.role_id, response.name], function (err, data) {
            console.table(data);
        })
        questions();
    })

}

questions ();
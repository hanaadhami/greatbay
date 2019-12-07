var inquirer = require("inquirer");
var fs = require('fs');
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "greatBay_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
});

function start() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "postOrBid",
                message: "Would you like to [POST] an auction or [BID] on an auction?",
                choices: [
                    "POST",
                    "BID",
                    "EXIT"
                ]

            }
        ]).then(function (err, res) {
            if (err) throw err;
        }
        );

    // logs the actual query being run
    console.log(query.sql);
}
start();

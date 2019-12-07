var inquirer = require("inquirer");
var fs = require('fs');
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "The0115!",
    database: "greatBay_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();

    connection.end();
});

const menu = [
    {
        type: "checkbox",
        name: "postOrBid",
        message: "Would you like to [POST] an auction or [BID] on an auction?",
        choices: [
            "POST",
            "BID",
            "EXIT"
        ]

    }
]

const POSTquestions = [
    {
        type: "input",
        message: "What is the item you would like to submit?",
        name: "item"
    },
    {
        type: "input",
        message: "What category would you like to place your auction in?",
        name: "category"
    },
    {
        type: "input",
        message: "What would you like your starting bid to be?",
        name: "startingBid"
    }
]

const BIDquestions = [
    {
        type: "input",
        message: "What auction would you like to place a bid in?",
        name: "auctionChoice"
    },
    {
        type: "input",
        message: "How much would you like to bid?",
        name: "bidAmount"
    }
]

function start() {
    inquirer
        .prompt(menu)
        .then(function (err, res) {
            if (err) throw err;
            if (res.postOrBid === "POST"){
                inquirer.prompt(POSTquestions)
                .then(function(POresponse){

                })
            }else if (res.postOrBid === "BID"){
                inquirer.prompt(BIDquestions)
                .then(function(){

                })
            }else if (res.postOrBid === "EXIT"){
                return "You have left the bid."
            }
        }
        );

    
}

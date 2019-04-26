var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'sykkel_DB'
});
connection.connect(function (err) {
    if (err) throw err;
    start();
});

// Re-Create a new Git repository called (sykkel), and start again. Then delete climbazon
// Make an exit choice in the switch case statement in inquirer
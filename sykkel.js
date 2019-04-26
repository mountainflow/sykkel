// Need to think about deducting from inventory and adding $$ to cart
const mysql = require('mysql');
const inquirer = require('inquirer');
const connection = mysql.createConnection({
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

function start() {
    console.log('connected to DB');
    inquirer.prompt({
        name: 'items',
        type: 'list',
        message: 'What are you shopping for?',
        choices: [
            'Road Bikes',
            'Mountain Bikes',
            'Parts',
            'Checkout',
            'EXIT'
        ]
    }).then(function (answer) {
        switch (answer.items) {
            case 'Road Bikes':
                roadBikes();
                break;
            case 'Mountain Bikes':
                mountainBikes();
                break;
            case 'Parts':
                parts();
                break;
            case 'Checkout':
                checkout();
                break;
            case 'EXIT':
                exit();
        }
    });
}

let roadBikes = function () {
    let query = 'SELECT item, price FROM road_bikes WHERE ?';
    connection.query(query);
    // for (let i = 0; i < )
}

let mountainBikes = function () {

}

let parts = function () {
    inquirer.prompt({
        name: 'parts',
        type: 'list',
        message: 'Do you need Road or Mountain bike parts?',
        choices: [
            'Road',
            'Mountain'
        ]
    }).then(function (answer) {
            switch (answer.parts) {
                case 'Road':
                    partsRoad();
                    break;
                case 'Mountain':
                    partsMountain();
            }

    });
}

let partsRoad = function () {

}

let partsMountain = function () {

}

let checkout = function () {

}

let exit = function () {
    connection.end();
    console.log('Have a nice Day :)');
}
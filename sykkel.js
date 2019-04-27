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
            'Cool Stuff',
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
            case 'Cool Stuff':
                coolStuff();
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
    let query = 'SELECT id, item, price, quantity FROM road_bikes';
    connection.query(query, function (err, res) {
        console.log('\n++++++++++++++++++++++++++++');
        for (let i = 0; i < res.length; i++) {
            console.log('\nID#: ' + res[i].id + '\nItem: ' + res[i].item + '\nPrice: $' + res[i].price + '\nQuantity Available: ' + res[i].quantity + '\n\n+++++++++++++++++++++++++++++');
        }
        start();
    });
}

let mountainBikes = function () {
    let query = 'SELECT id, item, price, quantity FROM mountain_bikes';
    connection.query(query, function (err, res) {
        console.log('\n++++++++++++++++++++++++++++');
        for (let i = 0; i < res.length; i++) {
            console.log('\nID#: ' + res[i].id + '\nItem: ' + res[i].item + '\nPrice: $' + res[i].price + '\nQuantity Available: ' + res[i].quantity + '\n\n+++++++++++++++++++++++++++++');
        }
        start();
    });
}

let coolStuff = function () {
    let query = 'SELECT id, item, price, quantity FROM accesories';
    connection.query(query, function (err, res) {
        console.log('\n++++++++++++++++++++++++++++');
        for (let i = 0; i < res.length; i++) {
            console.log('\nID#: ' + res[i].id + '\nItem: ' + res[i].item + '\nPrice: $' + res[i].price + '\nQuantity Available: ' + res[i].quantity + '\n\n+++++++++++++++++++++++++++++');
        }
        start();
    });
}

let checkout = function () {

}

let exit = function () {
    connection.end();
    console.log('\nHave an amazing Day :)');
}
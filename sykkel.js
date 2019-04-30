const mysql = require('mysql');
const inquirer = require('inquirer');
// Holds the value of the shopping cart
let cart = 0;
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
// Initial function
function start() {
    console.log('connected to DB');
    inquirer.prompt({
        name: 'items',
        type: 'rawlist',
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
// Intermediate function to continue on
let intermezzo = function () {
    inquirer.prompt({
        name: 'intermezzo',
        type: 'rawlist',
        message: 'What would you like to do next?',
        choices: [
            'Buy an Item by ID#',
            'Continue Shopping',
            'Checkout',
            'EXIT'
        ]
    }).then(function (answer) {
        switch (answer.intermezzo) {
            case 'Buy an Item by ID#':
                sale();
                break;
            case 'Continue Shopping':
                start();
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
    let query = 'SELECT * FROM road_bikes';
    connection.query(query, function (err, res) {
        console.log('\n++++++++++++++++++++++++++++');
        for (let i = 0; i < res.length; i++) {
            console.log('\nID#: ' + res[i].id + '\nItem: ' + res[i].item + '\nPrice: $' + res[i].price + '\nQuantity Available: ' + res[i].quantity + '\n\n+++++++++++++++++++++++++++++');
        }
        intermezzo();
    });
}
let mountainBikes = function () {
    let query = 'SELECT * FROM mountain_bikes';
    connection.query(query, function (err, res) {
        console.log('\n++++++++++++++++++++++++++++');
        for (let i = 0; i < res.length; i++) {
            console.log('\nID#: ' + res[i].id + '\nItem: ' + res[i].item + '\nPrice: $' + res[i].price + '\nQuantity Available: ' + res[i].quantity + '\n\n+++++++++++++++++++++++++++++');
        }
        intermezzo();
    });
}
// Accesory Function
let coolStuff = function () {
    let query = 'SELECT * FROM accesories';
    connection.query(query, function (err, res) {
        console.log('\n++++++++++++++++++++++++++++');
        for (let i = 0; i < res.length; i++) {
            console.log('\nID#: ' + res[i].id + '\nItem: ' + res[i].item + '\nPrice: $' + res[i].price + '\nQuantity Available: ' + res[i].quantity + '\n\n+++++++++++++++++++++++++++++');
        }
        intermezzo();
    });
}
// Picks the id of item number, adds amount to cart, and updates quantity available
let sale = function () {
    inquirer.prompt({
        name: 'sales',
        type: 'input',
        message: 'Choose ID#'
    }).then(function (answer) {
        switch (answer.sales) {
            case '201':
                connection.query('SELECT item, price, quantity FROM road_bikes', function (err, res) {
                    if (err) throw err;
                    if (res[0].quantity <= 0) {
                        console.log('\nThere are no more ' + res[0].item + 'left');
                    } else {
                        connection.query('UPDATE road_bikes SET quantity = quantity - 1 WHERE id = 201');
                        console.log('\n++++++++++++++++++++++++++++\n' + '\nYou have chosen:');
                        console.log('\nItem: ' + res[0].item + '\nPrice: $' + res[0].price);
                        console.log('\nThere are ' + res[0].quantity + ' left' + '\n\n+++++++++++++++++++++++++++++\n');
                        cart += res[0].price;
                        intermezzo();
                    }
                });
                break;
            case '202':
                connection.query('SELECT item, price, quantity FROM road_bikes', function (err, res) {
                    if (err) throw err;
                    if (res[1].quantity <= 0) {
                        console.log('\nThere are no more ' + res[1].item + 'left');
                    } else {
                        connection.query('UPDATE road_bikes SET quantity = quantity - 1 WHERE id = 202');
                        console.log('\n++++++++++++++++++++++++++++\n' + '\nYou have chosen:');
                        console.log('\nItem: ' + res[1].item + '\nPrice: $' + res[1].price);
                        console.log('\nThere are ' + res[1].quantity + ' left' + '\n\n+++++++++++++++++++++++++++++\n');
                        cart += res[1].price;
                        intermezzo();
                    }
                });
                break;
            case '203':
                connection.query('SELECT item, price, quantity FROM road_bikes', function (err, res) {
                    if (err) throw err;
                    if (res[2].quantity <= 0) {
                        console.log('\nThere are no more ' + res[2].item + 'left');
                    } else {
                        connection.query('UPDATE road_bikes SET quantity = quantity - 1 WHERE id = 203');
                        console.log('\n++++++++++++++++++++++++++++\n' + '\nYou have chosen:');
                        console.log('\nItem: ' + res[2].item + '\nPrice: $' + res[2].price);
                        console.log('\nThere are ' + res[2].quantity + ' left' + '\n\n+++++++++++++++++++++++++++++\n');
                        cart += res[2].price;
                        intermezzo();
                    }
                });
                break;
            case '204':
                connection.query('SELECT item, price, quantity FROM road_bikes', function (err, res) {
                    if (err) throw err;
                    if (res[3].quantity <= 0) {
                        console.log('\nThere are no more ' + res[3].item + 'left');
                    } else {
                        connection.query('UPDATE road_bikes SET quantity = quantity - 1 WHERE id = 204');
                        console.log('\n++++++++++++++++++++++++++++\n' + '\nYou have chosen:');
                        console.log('\nItem: ' + res[3].item + '\nPrice: $' + res[3].price);
                        console.log('\nThere are ' + res[3].quantity + ' left' + '\n\n+++++++++++++++++++++++++++++\n');
                        cart += res[3].price;
                        intermezzo();
                    }
                });
                break;
            case '205':
                connection.query('SELECT item, price, quantity FROM road_bikes', function (err, res) {
                    if (err) throw err;
                    if (res[4].quantity <= 0) {
                        console.log('\nThere are no more ' + res[4].item + 'left');
                    } else {
                        connection.query('UPDATE road_bikes SET quantity = quantity - 1 WHERE id = 205');
                        console.log('\n++++++++++++++++++++++++++++\n' + '\nYou have chosen:');
                        console.log('\nItem: ' + res[4].item + '\nPrice: $' + res[4].price);
                        console.log('\nThere are ' + res[4].quantity + ' left' + '\n\n+++++++++++++++++++++++++++++\n');
                        cart += res[4].price;
                        intermezzo();
                    }
                });
                break;
            case '301':
                connection.query('SELECT item, price, quantity FROM mountain_bikes', function (err, res) {
                    if (err) throw err;
                    if (res[0].quantity <= 0) {
                        console.log('\nThere are no more ' + res[0].item + 'left');
                    } else {
                        connection.query('UPDATE mountain_bikes SET quantity = quantity - 1 WHERE id = 301');
                        console.log('\n++++++++++++++++++++++++++++\n' + '\nYou have chosen:');
                        console.log('\nItem: ' + res[0].item + '\nPrice: $' + res[0].price);
                        console.log('\nThere are ' + res[0].quantity + ' left' + '\n\n+++++++++++++++++++++++++++++\n');
                        cart += res[0].price;
                        intermezzo();
                    }
                });
                break;
            case '302':
                connection.query('SELECT item, price, quantity FROM mountain_bikes', function (err, res) {
                    if (err) throw err;
                    if (res[1].quantity <= 0) {
                        console.log('\nThere are no more ' + res[1].item + 'left');
                    } else {
                        connection.query('UPDATE mountain_bikes SET quantity = quantity - 1 WHERE id = 302');
                        console.log('\n++++++++++++++++++++++++++++\n' + '\nYou have chosen:');
                        console.log('\nItem: ' + res[1].item + '\nPrice: $' + res[1].price);
                        console.log('\nThere are ' + res[1].quantity + ' left' + '\n\n+++++++++++++++++++++++++++++\n');
                        cart += res[1].price;
                        intermezzo();
                    }
                });
                break;
            case '303':
                connection.query('SELECT item, price, quantity FROM mountain_bikes', function (err, res) {
                    if (err) throw err;
                    if (res[2].quantity <= 0) {
                        console.log('\nThere are no more ' + res[2].item + 'left');
                    } else {
                        connection.query('UPDATE mountain_bikes SET quantity = quantity - 1 WHERE id = 303');
                        console.log('\n++++++++++++++++++++++++++++\n' + '\nYou have chosen:');
                        console.log('\nItem: ' + res[2].item + '\nPrice: $' + res[2].price);
                        console.log('\nThere are ' + res[2].quantity + ' left' + '\n\n+++++++++++++++++++++++++++++\n');
                        cart += res[2].price;
                        intermezzo();
                    }
                });
                break;
            case '304':
                connection.query('SELECT item, price, quantity FROM mountain_bikes', function (err, res) {
                    if (err) throw err;
                    if (res[3].quantity <= 0) {
                        console.log('\nThere are no more ' + res[3].item + 'left');
                        intermezzo();
                    } else {
                        connection.query('UPDATE mountain_bikes SET quantity = quantity - 1 WHERE id = 304');
                        console.log('\n++++++++++++++++++++++++++++\n' + '\nYou have chosen:');
                        console.log('\nItem: ' + res[3].item + '\nPrice: $' + res[3].price);
                        console.log('\nThere are ' + res[3].quantity + ' left' + '\n\n+++++++++++++++++++++++++++++\n');
                        cart += res[3].price;
                        intermezzo();
                    }
                });
                break;
            case '305':
               connection.query('SELECT item, price, quantity FROM mountain_bikes', function (err, res) {
                   if (err) throw err;
                   if (res[4].quantity <= 0) {
                       console.log('\nThere are no more ' + res[4].item + 'left');
                   } else {
                       connection.query('UPDATE mountain_bikes SET quantity = quantity - 1 WHERE id = 305');
                       console.log('\n++++++++++++++++++++++++++++\n' + '\nYou have chosen:');
                       console.log('\nItem: ' + res[4].item + '\nPrice: $' + res[4].price);
                       console.log('\nThere are ' + res[4].quantity + ' left' + '\n\n+++++++++++++++++++++++++++++\n');
                       cart += res[4].price;
                       intermezzo();
                   }
               });
                break;
            case '401':
                connection.query('SELECT item, price, quantity FROM accesories', function (err, res) {
                    if (err) throw err;
                    if (res[0].quantity <= 0) {
                        console.log('\nThere are no more ' + res[0].item + 'left');
                    } else {
                        connection.query('UPDATE accesories SET quantity = quantity - 1 WHERE id = 401');
                        console.log('\n++++++++++++++++++++++++++++\n' + '\nYou have chosen:');
                        console.log('\nItem: ' + res[0].item + '\nPrice: $' + res[0].price);
                        console.log('\nThere are ' + res[0].quantity + ' left' + '\n\n+++++++++++++++++++++++++++++\n');
                        cart += res[0].price;
                        intermezzo();
                    }
                });
                break;
            case '402':
               connection.query('SELECT item, price, quantity FROM accesories', function (err, res) {
                   if (err) throw err;
                   if (res[1].quantity <= 0) {
                       console.log('\nThere are no more ' + res[1].item + 'left');
                   } else {
                       connection.query('UPDATE accesories SET quantity = quantity - 1 WHERE id = 402');
                       console.log('\n++++++++++++++++++++++++++++\n' + '\nYou have chosen:');
                       console.log('\nItem: ' + res[1].item + '\nPrice: $' + res[1].price);
                       console.log('\nThere are ' + res[1].quantity + ' left' + '\n\n+++++++++++++++++++++++++++++\n');
                       cart += res[1].price;
                       intermezzo();
                   }
               });
                break;
            case '403':
                connection.query('SELECT item, price, quantity FROM accesories', function (err, res) {
                    if (err) throw err;
                    if (res[2].quantity <= 0) {
                        console.log('\nThere are no more ' + res[2].item + 'left');
                    } else {
                        connection.query('UPDATE accesories SET quantity = quantity - 1 WHERE id = 403');
                        console.log('\n++++++++++++++++++++++++++++\n' + '\nYou have chosen:');
                        console.log('\nItem: ' + res[2].item + '\nPrice: $' + res[2].price);
                        console.log('\nThere are ' + res[2].quantity + ' left' + '\n\n+++++++++++++++++++++++++++++\n');
                        cart += res[2].price;
                        intermezzo();
                    }
                });
                break;
            case '404':
                connection.query('SELECT item, price, quantity FROM accesories', function (err, res) {
                    if (err) throw err;
                    if (res[3].quantity <= 0) {
                        console.log('\nThere are no more ' + res[3].item + 'left');
                    } else {
                        connection.query('UPDATE accesories SET quantity = quantity - 1 WHERE id = 404');
                        console.log('\n++++++++++++++++++++++++++++\n' + '\nYou have chosen:');
                        console.log('\nItem: ' + res[3].item + '\nPrice: $' + res[3].price);
                        console.log('\nThere are ' + res[3].quantity + ' left' + '\n\n+++++++++++++++++++++++++++++\n');
                        cart += res[3].price;
                        intermezzo();
                    }
                });
                break;
            case '405':
                connection.query('SELECT item, price, quantity FROM accesories', function (err, res) {
                    if (err) throw err;
                    if (res[4].quantity <= 0) {
                        console.log('\nThere are no more ' + res[4].item + 'left');
                    } else {
                        connection.query('UPDATE accesories SET quantity = quantity - 1 WHERE id = 405');
                        console.log('\n++++++++++++++++++++++++++++\n' + '\nYou have chosen:');
                        console.log('\nItem: ' + res[4].item + '\nPrice: $' + res[4].price);
                        console.log('\nThere are ' + res[4].quantity + ' left' + '\n\n+++++++++++++++++++++++++++++\n');
                        cart += res[4].price;
                        intermezzo();
                    }
                });
                break;
            default:
                console.log('Please enter a valid ID#.');
                sale();
        }
    })
}
// Shows the amount in the shopping cart
let checkout = function () {
    console.log('\n++++++++++++++++++++++++++++\nYour cart is at $' + cart + '.00\n\n+++++++++++++++++++++++++++++\n');
    intermezzo();
}
// Ends connection
let exit = function () {
    connection.end();
    console.log('\n\n\nHave an amazing Day :)\n\n\n');
}
DROP DATABASE IF EXISTS sykkel_DB;

CREATE DATABASE sykkel_DB;

USE sykkel_DB;

CREATE TABLE products
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item VARCHAR(100) NULL,
    price INT NULL,
    quantity INT NULL
);
    ALTER TABLE products AUTO_INCREMENT = 201;

    -- INSERT INTO products(item, price, quantity)
    -- VALUES('2019 Pinarello Bolide TT', 14,499, 10),
    -- ('2019 Kaws Trek Madone', 160,000, 1),
    -- ('2019 BMC Timemachine ROAD 01', 11,000, 2),
    -- ();

    -- Not sure if it's better to make several .csv files and import them into respective tables, 
    -- or use INSERT INTO
    -- Need to think about deducting from inventory and adding $$ to cart

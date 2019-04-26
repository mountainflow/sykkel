DROP DATABASE IF EXISTS sykkel_DB;

CREATE DATABASE sykkel_DB;

USE sykkel_DB;

CREATE TABLE road_bikes
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item VARCHAR(100) NULL,
    price INT NULL,
    quantity INT NULL
);
    ALTER TABLE road_bikes AUTO_INCREMENT = 201;

    CREATE TABLE mountain_bikes
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item VARCHAR(100) NULL,
    price INT NULL,
    quantity INT NULL
);
    ALTER TABLE mountain_bikes AUTO_INCREMENT = 301;

    CREATE TABLE parts
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item VARCHAR(100) NULL,
    price INT NULL,
    quantity INT NULL
);
    ALTER TABLE parts AUTO_INCREMENT = 401;


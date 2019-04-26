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

CREATE TABLE parts_road
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item VARCHAR(100) NULL,
    price INT NULL,
    quantity INT NULL
);
    ALTER TABLE parts_road AUTO_INCREMENT = 401;
    
    CREATE TABLE parts_mountain
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item VARCHAR(100) NULL,
    price INT NULL,
    quantity INT NULL
);
    ALTER TABLE parts_mountain AUTO_INCREMENT = 501;
    

SELECT * FROM road_bikes;
SELECT * FROM mountain_bikes;
SELECT * FROM parts_road;
SELECT * FROM parts_mountain;

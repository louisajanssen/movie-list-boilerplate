CREATE DATABASE IF NOT EXISTS movies;

USE movies;

CREATE TABLE movielist (
    id INT AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    watched BOOLEAN NOT NULL DEFAULT 0,
    personalRating INT,
    PRIMARY KEY(id)
);

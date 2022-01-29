--Step 1 delete db if already exists

DROP DATABASE IF EXISTS tuner_dev;

--- Step 2 create database;

CREATE DATABASE tuner_dev;

--- Step 3 connect to database

\c tuner_dev;

--- Step 4 create our table

CREATE TABLE song (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);


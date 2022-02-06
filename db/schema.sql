DROP DATABASE IF EXISTS songs_db;

CREATE DATABASE songs_db;
\c songs_db

CREATE TABLE songs(
id SERIAL PRIMARY KEY,
name VARCHAR(50),
artist VARCHAR(50),
album VARCHAR(50),
time TIME,
is_favorite BOOLEAN);
DROP DATABASE IF EXISTS songs_db;

CREATE DATABASE songs_db;

\c songs_db;

CREATE TABLE songs(
    id SERIAL KEY PRIMARY KEY, 
    name VARCHAR, 
    artist VARCHAR,
    album VARCHAR. 
    time INT,
    is_favorite BOOLEAN
)
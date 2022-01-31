DROP DATABASE IF EXISTS songs_api;
CREATE DATABASE songs_api;

\c songs_api;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    artist VARCHAR(50),
    album VARCHAR(40),
    time VARCHAR(7),
    is_favorite BOOLEAN,
);
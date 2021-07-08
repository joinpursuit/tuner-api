DROP DATABASE IF EXISTS songs_dev;

CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT,
    artist TEXT,
    album Text,
    time TEXT, 
    is_favorite BOOLEAN
);

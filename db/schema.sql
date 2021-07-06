DROP DATABASE IF EXISTS songs_library;
CREATE DATABASE songs_library;

-- connecting to the database
\c songs_library;

-- create the songs table
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);
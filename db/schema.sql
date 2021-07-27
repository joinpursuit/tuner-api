DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

-- connecting to the database
\c songs_dev;

-- create our bookmarks table
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT,
    artist TEXT,
    album TEXT,
    time INTEGER,
    is_favorite BOOLEAN
);


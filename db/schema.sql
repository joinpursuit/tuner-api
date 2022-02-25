-- step 1 incase we already have a db, drop it
DROP DATABASE IF EXISTS songs_dev; 
-- step 2 create the db
CREATE DATABASE songs_dev;
-- step 3 connect to the db
\c songs_dev;
-- step 4 create a table for the db with these values
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);
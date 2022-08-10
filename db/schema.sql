-- Creating the database
CREATE DATABASE songs_dev;

-- Connect
\c songs_dev;

-- Create table
CREATE TABLE 
    songs (
        id serial PRIMARY KEY, 
        name TEXT NOT NULL, 
        artist TEXT NOT NULL,
        album TEXT NOT NULL,
        time TEXT NOT NULL,
        is_favorite BOOLEAN
); 


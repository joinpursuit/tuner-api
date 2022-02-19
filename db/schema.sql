-- Drop database, if it exists
DROP DATABASE IF EXISTS songs_dev;

-- Create the songs_dev database
CREATE DATABASE songs_dev;


-- Connect to songs_dev
\c songs_dev;

-- Create a table named songs
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT, 
    artist TEXT,
    album TEXT,
    time TEXT, 
    is_favorite BOOLEAN DEFAULT false
);


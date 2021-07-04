-- Delete database songs_dev if it already exists
DROP DATABASE IF EXISTS songs_dev;
--

-- Create database songs_dev
CREATE DATABASE songs_dev;
--

-- Connect to songs_dev
\c songs_dev
--

-- Create table songs
CREATE TABLE songs(id SERIAL PRIMARY KEY, name TEXT, artist TEXT, album TEXT,
time TEXT, is_favorite BOOLEAN);
--
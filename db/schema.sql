--Step 1 drop DB if it exists
DROP DATABASE IF EXISTS songs_db;

-- create DB
CREATE DATABASE songs_db;

--\CONNECT TO DB
\C songs_db;


-- CREATE TABLE(ENTITY)
CREATE TABLE songslist (
name TEXT NOT NULL,
artist TEXT NOT NULL,
album TEXT,
time TEXT,
is_favorite BOOLEAN DEFAULT true
);

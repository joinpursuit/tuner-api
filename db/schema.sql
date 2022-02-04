DROP DATABASE IF EXISTS songs_db;
CREATE DATABASE songs_db;

\c songs_db;

CREATE TABLE songs_tb (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    length TEXT,
    is_favorite BOOLEAN    
);
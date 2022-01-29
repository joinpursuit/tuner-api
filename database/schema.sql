DROP DATABASE IF EXISTS best_songs;
CREATE DATABASE best_songs;
\c best_songs;
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT,
    artist TEXT, 
    album TEXT,
    time TEXT, is_favorite  BOOLEAN);

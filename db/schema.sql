DROP DATABASE IF EXISTS songs_db;
CREATE DATABASE songs_db;
\ c songs_db;
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    title TEXT,
    artist TEXT,
    album TEXT,
    song_length TEXT,
    is_favorite BOOLEAN
);
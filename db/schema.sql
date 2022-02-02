DROP DATABASE IF EXISTS db_songs;
CREATE DATABASE db_songs;

\c db_songs;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);
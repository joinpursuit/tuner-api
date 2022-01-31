DROP DATABASE IF EXISTS songs_api;
CREATE DATABASE songs_api;

\c songs_api

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
)
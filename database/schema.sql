DROP DATABASE IF EXISTS songs_info;
CREATE DATABASE songs_info;

\c songs_info;

CREATE TABLE songs(
    id SERIAL PRIMARY KEY,
    name TEXT,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);


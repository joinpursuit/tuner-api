DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\songs_dev;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN,
);
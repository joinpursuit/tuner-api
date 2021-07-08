CREATE DATABASE playlist;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT NOT NULL,
    time TEXT NOT NULL
    is_favorite BOOLEAN NOT NULL
);
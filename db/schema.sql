DROP DATABASE IF EXISTS turner;

CREATE DATABASE tuner;

\c tuner

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NUll,
    artist  Text,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);
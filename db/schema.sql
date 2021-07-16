DROP DATABASE IF EXISTS tuner_db;
CREATE DATABASE tuner_db;

\c tuner_db;

CREATE TABLE songs(
    id SERIAL PRIMARY KEY,
    name TEXT,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);
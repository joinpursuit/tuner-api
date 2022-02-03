DROP DATABASE IF EXISTS tuner_dev;
CREATE DATABASE tuner_dev;

\c tuner_dev;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    artist_name TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);
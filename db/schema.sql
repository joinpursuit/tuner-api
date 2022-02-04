DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE table songs (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    length TEXT,
    is_favorite BOOLEAN
);
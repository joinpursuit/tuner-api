DROP DATABASE IF EXISTS tuner_dev;
CREATE DATABASE tuner_dev;

\c bookmarks_dev;

CREATE TABLE bookmarks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);
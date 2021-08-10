DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs(
    id SERIAL PRIMARY KEY,
    name TEXT,
    artist TEXT,
    album TEXT,
    photo TEXT,
    time TEXT,
    mp3 TEXT,
    is_favorite BOOLEAN
);

DROP TABLE IF EXISTS video_dev CASCADE;

\c video_dev;

CREATE TABLE  video(
    id SERIAL PRIMARY KEY,
    name TEXT,
    artist TEXT,
    time TEXT,
    description TEXT,
    video TEXT,
    is_favorite BOOLEAN
);
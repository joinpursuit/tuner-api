DROP DATABASE IF EXISTS music_dev;

CREATE DATABASE music_dev;

\c music_dev;

CREATE TABLE songs(id SERIAL PRIMARY KEY, name TEXT NOT NULL, artist TEXT NOT NULL, album TEXT NOT NULL, time TEXT, is_favorite BOOLEAN);









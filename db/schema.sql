DROP DATABASE IF EXISTS music_dev;

CREATE DATABASE music_dev;

\c music_dev;

CREATE TABLE songs_dev(id SERIAL PRIMARY KEY, name TEXT NOT NULL, artis TEXT NOT NULL, album TEXT NOT NULL, time INT, is_favorite BOOLEAN);









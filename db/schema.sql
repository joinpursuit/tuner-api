DROP DATABASE IF EXISTS my_playlist

CREATE DATABASE my_playlist;

\c my_playlist

CREATE TABLE songs(id SERIAL PRIMARY KEY, name TEXT NOT NULL, artist TEXT, album TEXT, time TEXT, is_favorite BOOLEAN);
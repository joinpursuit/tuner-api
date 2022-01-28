DROP DATABASE IF EXISTS best_songs;

CREATE DATABASE best_songs;

\c best_songs;

CREATE TABLE anime(id SERIAL PRIMARY KEY, name TEXT NOT NULL, arttist TEXT, album TEXT, time TEXT, is_favorite  BOOLEAN);

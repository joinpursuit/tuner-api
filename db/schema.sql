-- Drop database if it exists
DROP DATABASE IF EXISTS songs_database;
--Create Database
CREATE DATABASE songs_database;
--Connec to thei databses
\c songs_database;
--Create Table(Entity)
CREATE TABLE songs (id SERIAL PRIMARY KEY, name TEXT NOT NULL, artist TEXT NOT NULL, album TEXT, time TEXT, is_favorite BOOLEAN DEFAULT true);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  reviewer TEXT NOT NULL,
  title TEXT,
  content TEXT NOT NULL,
  rating INT,
  CHECK (rating >= 0 AND rating <= 5),
  song_id INTEGER REFERENCES songs (id)
    ON DELETE CASCADE
)
DROP DATABASE IF EXISTS tuner_api;

CREATE DATABASE tuner_api;

\c tuner_api;

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  artist TEXT NOT NULL,
  album TEXT,
  time INT,
  is_favorite BOOLEAN
);
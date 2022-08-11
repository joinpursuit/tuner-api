-- 1) IN CASE theres a database DROP IT
DROP DATABASE IF EXISTS tunes_dev;

--2) create the db
CREATE DATABASE tunes_dev;


--3) CONNECTO TO IT 

\c tunes_dev;

--4) blueprint out whatever tables we will need

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);

CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    creator TEXT NOT NULL
);

CREATE TABLE playlists_songs (
    id SERIAL PRIMARY KEY,
    playlists_id INTEGER REFERENCES playlists (id)
    ON DELETE CASCADE,
    songs_id INTEGER REFERENCES songs (id) 
    ON DELETE CASCADE
);

-- psql -U postgres -f db/schema.sql

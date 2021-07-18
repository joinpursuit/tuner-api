DROP DATABASE IF EXISTS songs_db;

CREATE DATABASE songs_db;

\c songs_db;


CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    playlistName TEXT NOT NULL
    -- artist TEXT NOT NULL,
    -- album TEXT NOT NULL,
    -- time TEXT NOT NULL,
    -- is_favorite BOOLEAN, 
);


CREATE TABLE songs(
    id SERIAL PRIMARY KEY, 
    playlist_id INT REFERENCES playlists(id) 
        ON DELETE CASCADE, 
    name TEXT NOT NULL, 
    playlist TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT NOT NULL, 
    time TEXT NOT NULL,
    is_favorite BOOLEAN
);
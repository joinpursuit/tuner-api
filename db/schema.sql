DROP DATABASE IF EXISTS tuner_db;
CREATE DATABASE tuner_db;

\c tuner_db;

CREATE TABLE playlists(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL, 
    is_favorite BOOLEAN NOT NULL DEFAULT FALSE
);
-- CREATE TABLE albums(
--     id SERIAL PRIMARY KEY,
--     name TEXT NOT NULL, 
--     is_favorite BOOLEAN NOT NULL DEFAULT FALSE
-- );
-- CREATE TABLE artists(
--     id SERIAL PRIMARY KEY,
--     name TEXT NOT NULL, 
--     is_favorite BOOLEAN NOT NULL DEFAULT FALSE
-- );
CREATE TABLE songs(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT NOT NULL,
    time TEXT NOT NULL,
    is_favorite BOOLEAN NOT NULL DEFAULT FALSE,
    playlist_id INT REFERENCES playlists (id) 
    -- album_id INT REFERENCES albums (id),
    -- artist_id INT REFERENCES artists (id)
);
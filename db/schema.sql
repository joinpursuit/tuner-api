DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;


CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    hometown VARCHAR,
    arrival_yr INTEGER,
    band BOOLEAN
);

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    year_released INT,
    duration VARCHAR,
    cover TEXT,
    rating DECIMAL,
    CHECK (rating >= 0 AND rating <= 5),
    genre VARCHAR,
    artist_id INTEGER REFERENCES artists (id)
);

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    time VARCHAR,
    is_favorite BOOLEAN,
    yt_id VARCHAR,
    artist_id INTEGER REFERENCES artists (id),
    album_id INTEGER REFERENCES albums (id)
);

CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    description TEXT,
    picture TEXT
);

CREATE TABLE playlistSongs (
    id SERIAL PRIMARY KEY,
    song_id INTEGER REFERENCES songs (id),
    playlist_id INTEGER REFERENCES playlists (id)
);


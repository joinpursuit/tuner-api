DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    artist VARCHAR,
    album VARCHAR,
    time VARCHAR,
    is_favorite BOOLEAN
);
-- sql -U postgres -f db/schema.sql --
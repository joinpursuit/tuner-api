DROP TABLE IF EXISTS songs_dev CASCADE;
-- CREATE DATABASE songs_dev;

-- \c songs_dev;

CREATE TABLE songs_dev(
    id SERIAL PRIMARY KEY,
    name TEXT,
    artist TEXT,
    album TEXT,
    photo TEXT,
    time TEXT,
    mp3 TEXT,
    is_favorite BOOLEAN
);

DROP TABLE IF EXISTS video_dev CASCADE;

-- \c video_dev;

CREATE TABLE  video_dev(
    id SERIAL PRIMARY KEY,
    name TEXT,
    artist TEXT,
    time TEXT,
    description TEXT,
    video TEXT,
    is_favorite BOOLEAN
);

DROP TABLE IF EXISTS lyric_dev CASCADE;

-- \c video_dev;

CREATE TABLE  lyric_dev(
    id SERIAL PRIMARY KEY,
    name TEXT,
    artist TEXT,
    album TEXT,
    released INTEGER,
    spanish TEXT, 
    english TEXT
);

DROP TABLE IF EXISTS albums_dev CASCADE;

CREATE TABLE  albums_dev(
   id SERIAL PRIMARY KEY,
   about TEXT,
   about2 TEXT,
   members TEXT,
   name TEXT,
   years INTEGER,
   covers TEXT
);

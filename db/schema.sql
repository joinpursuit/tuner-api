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

DROP TABLE IF EXISTS artist_dev CASCADE;

CREATE TABLE  artist_dev (
   id SERIAL PRIMARY KEY,
   band TEXT,
   name TEXT,
   name2 TEXT,
   name3 TEXT,
   name4 TEXT,
   name5 TEXT,
   description TEXT,
   imagen TEXT,
   origin TEXT,
   years TEXT,
   awards TEXT,
   award2 TEXT
);

DROP TABLE IF EXISTS genre_dev CASCADE;

CREATE TABLE  genre_dev (
    name TEXT,
    name2 TEXT,
    name3 TEXT,
    name4 TEXT,
    name5 TEXT, 
    name6 TEXT,
    name7 TEXT,
    name8 TEXT,
    name9 TEXT,
    name10 TEXT,
    name11 TEXT,
    name12 TEXT,
    name13 TEXT,
    name14 TEXT,
    name15 TEXT,
    name16 TEXT,
    name17 TEXT,
    name18 TEXT,
    name19 TEXT,
    name20 TEXT,
    name21 TEXT,
    name22 TEXT,
    name23 TEXT,
    name24 TEXT,
    name25 TEXT,
    name26 TEXT,
    name27 TEXT,
    name28 TEXT,
    name29 TEXT,
    name30 TEXT,
    name31 TEXT,
    name32 TEXT,
    name33 TEXT,
    name34 TEXT,
    name35 TEXT,
    name36 TEXT,
    name37 TEXT,
    name38 TEXT
);

-- step 1- in case there is a database already, DROP IT.
DROP DATABASE IF EXISTS tuner;

--step 2 create  the db
CREATE DATABASE tuner;

--step 3 connect to it
\c tuner;

--step 4 blueprint out any tables we need
CREATE TABLE song (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time INT,
    is_favorite BOOLEAN
);

-- psql -U postgres -f db/schema.sql
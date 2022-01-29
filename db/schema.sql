-- Step 1: Delete DB if it already exist

DROP DATABASE IF EXISTS tuner_dev;

-- Step 2: Create DB

CREATE DATABASE tuner_dev;

-- Step 3: Connect to DB

\c tuner_dev;

-- Step 4: Create our table

CREATE TABLE song (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);
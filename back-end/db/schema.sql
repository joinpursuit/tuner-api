-- step 1 incase there is a database already, drop it
DROP DATABASE IF EXISTS songs_dev;

--step 2 create the db
CREATE DATABASE songs_dev;

--step 3 connect to the db
\c songs_dev;

--step 4 create the songs table
CREATE TABLE songs (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN);

-- command (connect to psql under the user postgres, run the file that inside
-- db directory called schema.sql)
-- psql -U postgres -f db/schema.sql
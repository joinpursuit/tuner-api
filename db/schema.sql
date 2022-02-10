--Step 1 drop DB if it exists
DROP DATABASE IF EXISTS songs_db;


CREATE DATABASE songs_db;
--\CONNECT TO DB
\c songs_db;


-- CREATE TABLE(ENTITY)
CREATE TABLE songslist (
artistId SERIAL PRIMARY KEY,
artistName TEXT,
genre TEXT,
nationality TEXT,
dateOfBirth TEXT,
activeFrom INT
);

--ALTER TABLE songslist 
--ALTER COLUMN dateOfBirth TYPE TEXT;

CREATE TABLE Albums (
  AlbumId SERIAL PRIMARY KEY,
  AlbumName TEXT NOT NULL,
  ReleaseDate INT,
  is_favorite BOOLEAN DEFAULT true,
  artistId INT REFERENCES songslist(ArtistId) 
  ON DELETE CASCADE        
);






--https://niamurrell.com/code/tutorials/2019-05-27-deploying-another-heroku-app/
-- https://dev.to/tgrede/how-to-set-up-a-postgres-database-with-heroku-31i5

--complete CRUD https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/
--Step 1 drop DB if it exists
DROP DATABASE IF EXISTS songs_db;

-- CREATE ROLE jalamangjanka@gmail.com;
-- ALTER ROLE jalamangjanka@gmail.com WITH LOGIN PASSWORD 'Dysfunxz@!' NOSUPERUSER NOCREATEDB NOCREATEROLE;
-- CREATE DATABASE songs_db OWNER jalamangjanka@gmail.com;
-- REVOKE ALL ON DATABASE songs_db FROM PUBLIC;
-- GRANT CONNECT ON DATABASE songs_db TO jalamangjanka@gmail.com;
-- GRANT ALL ON DATABASE songs_db TO jalamangjanka@gmail.com;
CREATE DATABASE songs_db;
--\CONNECT TO DB
\C songs_db;


-- CREATE TABLE(ENTITY)
CREATE TABLE songslist (id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
artist TEXT NOT NULL,
album TEXT,
time TEXT,
is_favorite BOOLEAN DEFAULT true
);

--https://niamurrell.com/code/tutorials/2019-05-27-deploying-another-heroku-app/
-- https://dev.to/tgrede/how-to-set-up-a-postgres-database-with-heroku-31i5
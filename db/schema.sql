-- Drop database if it exists
DROP DATABASE IF EXISTS songs_database;
--Create Database
CREATE DATABASE songs_database;
--Connec to thei databses
\c songs_database;
--Create Table(Entity)
CREATE TABLE songs (name TEXT NOT NULL, artist TEXT NOT NULL, album TEXT, time TEXT, is_favorite BOOLEAN DEFAULT true);
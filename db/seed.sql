-- connect to the DB
\c songs_db;


INSERT INTO songslist (artistId, artistName, genre, nationality, dateOfBirth, activeFrom)
VALUES
(1 , 'Tupac Shakur - 2Pac', 'Rap', 'American', 'June 16, 1971', 1989),
(2 , 'Eminem', 'Rap', 'American', 'October 17, 1972', 1988),
(3 , 'Salif Keita', 'Afropop', 'Malian', 'August 25, 1949', 1975),
(4 , 'Tiwa Savage', 'Afrobeat', 'Nigerian', 'February 5, 1980', 1996),
(5 , 'Nyancho', 'Afrobeat', 'Gambian', 'July 13, 1979', 2006);



INSERT INTO albums (AlbumId, AlbumName, ReleaseDate, is_favorite, artistId)
VALUES
(1 , '2Pacalypse Now', 1991, true, 1),
(2 , 'Me Against the World ', 1993, false, 1),
(3 , 'All Eyez on Me', 1995, true, 1),
(4 , 'The Slim Shady LP', 1999, true, 2),
(5 , 'Music to Be Murdered By', 2020, false, 2),
(6 , 'Seydou Bathily', 1991, true, 3),
(7 , 'La différence', 2009, false, 3),
(8 , 'Once Upon a Time ', 2013, true, 4),
(9 , 'Amina Taylor Sonko', 2016, true, 5);


SELECT * FROM songslist;
SELECT * FROM albums;

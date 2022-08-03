-- step 1 connect to the database
\c songs_dev

-- step 2 add pre made data to the table
INSERT INTO songs (name,artist,album,time,is_favorite) VALUES 
('The Reluctant Heroes', 'mpi','Attack on Titan Original Soundtrack',267,true),
('Call your name','mpi & CASG','Attack on Titan Original Soundtrack',268,true),
('Shinzou wo Sasageyo!', 'Linked Horizon','Attack on Titan Original Soundtrack',342,true),
('Laputa: Castle In the Sky Suite', 'Eminence Symphony Orchestra','A Night in Fantasia 2009 Live',405,true),
('Merry-Go-Round of Life', 'Joe Hisaishi', 'Merry-Go-Round of Life',309,true);

--command
-- psql -U postgres -f db/seed.sql
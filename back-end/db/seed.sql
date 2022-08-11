-- step 1 connect to the database
\c songs_dev

-- step 2 add pre made data to the table
INSERT INTO songs (name,artist,album,time,is_favorite) VALUES 
('Fame', 'David Bowie',NULL,'4:12',true),
('The Reluctant Heroes', 'mpi','Attack on Titan Original Soundtrack','4:27',true),
('Call your name','mpi & CASG','Attack on Titan Original Soundtrack','4:28',true),
('Shinzou wo Sasageyo!', 'Linked Horizon','Attack on Titan Original Soundtrack','5:42',true),
('Laputa: Castle In the Sky Suite', 'Eminence Symphony Orchestra','A Night in Fantasia 2009 Live','6:45',true),
('Merry-Go-Round of Life', 'Joe Hisaishi', 'Merry-Go-Round of Life','5:09',true);

--command
-- psql -U postgres -f db/seed.sql
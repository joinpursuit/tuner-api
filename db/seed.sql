-- connect to our database in psql
\c songs_library;

INSERT INTO songs
(name, artist, album, time, is_favorite)
VALUES
('DÁKITI','Bad Bunny & Jhay Cortez','EL ÚLTIMO TOUR DEL MUNDO','3:25.09', true),
('PORFA (Remix)','Feid, J Balvin, Maluma, Nicky Jam, Sech & Justin Quiles','PORFA (Remix) - Single','5:33', true),
('Dreams and Nightmares','Meek Mill','Dreams and Nightmares (Deluxe Version)','3:50.533', true),
('ROCKSTAR (feat. Roddy Ricch)','DaBaby','BLAME IT ON BABY','3:01.733', true),
('Sum 2 Prove','Lil Baby','Sum 2 Prove - Single','3:25.76', true),
('Big Stepper','Roddy Ricch','Please Excuse Me For Being Antisocial','2:55.17',true);
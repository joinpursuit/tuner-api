-- connect to the DB
\c songs_db;

INSERT INTO songslist (name, artist, album, time, is_favorite)
VALUES
('What''s Going On','Marvin Gaye','What''s Going On','1971',true),
('Salif Keita','Seydou','''Folon''...The Past',1995,true),
('If You Love Me', 'Brownstone', 'From the Bottom Up', '1995', true),
('When A Women Is Fed Up', 'R. Kelly','R.','1998', false),
('Friday','Rebecca Black','Friday','2011',false);

SELECT * FROM songslist;

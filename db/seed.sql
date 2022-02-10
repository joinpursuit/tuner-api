-- connect to the database
\c songs_database;
--add values to the table
INSERT INTO songs (name, artist, album, time, is_favorite) VALUES 
('What''s Going On','Marvin Gaye','What''s Going On','1971',true),
('Salif Keita','Seydou','''Folon''...The Past',1995,true),
('If You Love Me', 'Brownstone', 'From the Bottom Up', '1995', true),
('When A Women Is Fed Up', 'R. Kelly','R.','1998', false),
('Friday','Rebecca Black','Friday','2011',false);


INSERT INTO reviews (song_id, reviewer, title, content, rating) VALUES 
('1', 'Star', null, 'A true classic', 4),
('3', 'Jalamang', 'new', 'This is an amazing song', 4),
('2', 'Rose', null,'One of my go-tos', 5),
('4', 'Val', 'A stylish exploration of genres.', 'I''m mad I love this song so much', 5),
('5', 'Steven', 'oldie but goldie', 'Not really', 1);

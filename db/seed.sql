-- connect to our database in psql
\c songs_dev;

INSERT INTO songs 
(name, artist, album, time, is_favorite)
VALUES 
('Bohemian Rhapsody', 'Queen', 'A Night at the Opera', 1975, true),
('Thriller', 'Micheal Jackson', 'Thriller', 1982, true ),
('Eye of the Tiger', 'Survivor', 'Eye of the Tiger', 1982, true),
('No Easy Way Out', 'Robert Tepper', 'Rocky IV', 1985, true),
('What Is Love', 'Haddaway', 'The Album', 1993, true),
('Aiysha', 'Cheb Khaled', 'Aicha', 1996, true ),
('Be My Lover', 'La Bouche', 'Sweet Dreams', 1995, true);
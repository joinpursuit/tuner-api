-- Connect to songs_dev
\c songs_dev
--


-- Populate table songs
INSERT INTO songs
(name, artist, album, time, is_favorite)
VALUES
('You Right', 'Doja Cat', 'Planet Her', 'June 26, 2021', true),
('Levitating', 'Dua Lipa', 'Future Nostalgia', 'March 27, 2020', false),
('Bad Habits', 'Ed Sheeran', 'Bad Habits', 'March 22, 2019', true);
--
\c songs_db

INSERT INTO playlists (playlistName)
VALUES('belongs to C'),
('belongs to D');


INSERT INTO songs(playlist_id, name, playlist, artist, album, time, is_favorite)

VALUES
('1', 'Butter', 'belongs to C', 'BTS', ' Butter (Hotter, Sweeter, Cooler)', '3:02', FALSE),
('1', 'Good 4 U', 'belongs to C', 'Olivia Rodrigo', 'Sour', '3:18', FALSE),
('1', 'Kiss Me More', 'belongs to C', 'Doja Cat', 'Planet Her', '5:18', TRUE),
('1', 'Levitating', 'belongs to C', 'Dua Lipa', 'Future Nostalgia', '3:50', FALSE),
('1', 'Bad Habits', 'belongs to C', 'Ed Sheeran', 'Bad Habits', '4:00', TRUE),
('1', 'Leave The Door Open', 'belongs to C', 'Silk Sonic', 'Leave The Door Open','4:03', TRUE),
('1', 'Peaches', 'belongs to C', 'Justing Bieber', 'Justice', '3:17', FALSE),
('1', 'Montero', 'belongs to C', 'Lil Nas X', 'Montero', '3:07', TRUE),
('1', 'Save Your Tears', 'belongs to C', 'The Weeknd', 'Afterhours', '4:08', TRUE ),
('2', 'Baby Be Mine', 'belongs to D', 'Michael Jackson', 'Thriller', '4:20', false),
('2', 'The Girl is mine', 'belongs to D','Michael Jackson', 'Thriller', '3:42', true),
('2', 'Thriller','belongs to D','Michael Jackson', 'Thriller', '5:58', true),
('2', 'Bebaho', 'belongs to D','Yulduz Usmonova', 'Bebaho', '2:05', true),
('2', 'My Love', 'belongs to D','Jill Scott', 'The Real Things Words and Sounds Vol 3', '2:07', false),
('2', 'Cant help falling in love', 'belongs to D','Elvis Presley', 'cant help falling in love', '2:12', true),
('2', 'Table For One', 'belongs to D','Ego Ella May',  'Honey For Wounds', '2:20', true),
('2', 'Counting My Blessings', 'belongs to D','Nadia Batson', 'Get Soca 2021', '2:21', true);

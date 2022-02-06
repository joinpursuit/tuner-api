\c songs_dev;

INSERT INTO artists (name, hometown, arrival_yr, band) VALUES 
('MF DOOM','London',1988, FALSE),
('Outkast','Atlanta',1992, TRUE),
('Al Green','Arkansas',1955, FALSE),
('Portishead','Bristol',2005, TRUE),
('Barrington Levy','Jamaica',1976,FALSE);

INSERT INTO albums (artist_id, title, year_released, duration, rating, genre) VALUES 
(1, 'MM..FOOD', 2004, '48:47', 5, 'Hip-Hop/Rap'),
(2, 'ATLiens', 1996, '58:31', 4.5, 'Hip-Hop/Rap'),
(3, 'I''m Still in Love with You', 1972, '34:59', 4, 'R&B'),
(4, 'Dummy', 1994, '48:45', 4, 'Alternative'),
(5, 'Here I Come', 1995, '46:26', 4, 'Reggea');

INSERT INTO songs (title, time, is_favorite, yt_id, artist_id, album_id) VALUES
('Kon Karne', '2:52', TRUE, 'E5s6jcuw6NM',1,1),
('Elevators (Me & You)','4:25', TRUE,'uqB_UVlhlPA',2,2),
('Simply Beautiful', '4:12', TRUE, 'tw3e00E016k',3,3),
('Glory Box','5:09', TRUE, 'c417rIku6Iw',4,4),
('Here I Come','3:46',TRUE, 'clCAfLfPWM4',5,5);

INSERT INTO playlists (title, description, picture) VALUES 
('Current Favorites', 'What I am listening to now...', 'https://i.pinimg.com/originals/75/0a/89/750a89e4b9d9dc3f4b566684bc0a7a53.jpg');

INSERT INTO playlistSongs (song_id, playlist_id) VALUES 
(1,1),
(2,1),
(3,1),
(4,1),
(5,1);
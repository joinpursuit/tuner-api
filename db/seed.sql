\c songs_dev;

INSERT INTO artists (name, hometown, arrival_yr, band) VALUES 
('MF DOOM','London',1988, FALSE),
('Outkast','Atlanta',1992, TRUE),
('Al Green','Arkansas',1955, FALSE),
('Portishead','Bristol',2005, TRUE),
('Barrington Levy','Jamaica',1976,FALSE);

INSERT INTO albums (artist_id, title, year_released, duration, cover,rating, genre) VALUES 
(1, 'MM..FOOD', 2004, '48:47', 'https://f4.bcbits.com/img/a2625942251_10.jpg' ,5, 'Hip-Hop/Rap'),
(2, 'ATLiens', 1996, '58:31', 'https://townsquare.media/site/812/files/2015/08/OutKast-ATLien-1080.jpg?w=980&q=75', 4.5, 'Hip-Hop/Rap'),
(3, 'I''m Still in Love with You', 1972, '34:59', 'https://m.media-amazon.com/images/I/91mi6eK6pZL._SL1500_.jpg' , 4, 'R&B'),
(4, 'Dummy', 1994, '48:45', 'https://media.pitchfork.com/photos/5929c375eb335119a49ed6f6/1:1/w_600/d17fe61e.jpg' , 4, 'Alternative'),
(5, 'Here I Come', 1995, '46:26', 'https://images.genius.com/a2df8b74d8f88faab0ba97923da1dc3c.1000x1000x1.jpg' , 4, 'Reggae');

INSERT INTO songs (title, time, is_favorite, yt_id ,artist_id, album_id) VALUES
('Kon Karne', '2:52', TRUE, 'E5s6jcuw6NM',1,1),
('Elevators (Me & You)','4:25', TRUE,'uqB_UVlhlPA',2,2),
('Simply Beautiful', '4:12', TRUE, 'tw3e00E016k',3,3),
('Glory Box','5:09', TRUE, 'c417rIku6Iw',4,4),
('Here I Come','3:46',TRUE, 'clCAfLfPWM4',5,5),
('One Beer', '4:19', FALSE, 'h69FSgua80A',1,1),
('Deep Fried Frenz', '5:00', FALSE, 'dLBrhd1yqN4',1,1),
('Kon Queso', '4:00', FALSE, 'niflK9JqgbY',1,1),
('Roads','5:04', FALSE, 'Vg1jyL3cr60',4,4);

INSERT INTO playlists (title, description, picture) VALUES 
('Current Favorites', 'What I am listening to now...', 'https://i.pinimg.com/originals/75/0a/89/750a89e4b9d9dc3f4b566684bc0a7a53.jpg');

INSERT INTO playlistSongs (song_id, playlist_id) VALUES 
(1,1),
(2,1),
(3,1),
(4,1),
(5,1);
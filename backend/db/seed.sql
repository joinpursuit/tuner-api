\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Stranger by Nature', 'Adele', '30', '3:02', False),
('Send My Love', 'Adele', '25', '3:43', TRUE),
('Cherry Blossom', 'Kacey Musgraves', 'Star-Crossed', '3:04', TRUE),
('Light Blue', 'Lindsey Jordan', 'Valentine', '2:34', FALSE),
('My Future', 'BIllie Eilish', 'Happier Than Ever', '3:26', FALSE),
('Letter to the Past', 'Brandi Carlile', 'In These Silent Days', '3:40', TRUE);

INSERT INTO reviews (song_id, reviewer, title, content, rating) VALUES
('1', 'Evan', 'Not Bad', 'It is just Okay', 3),
('2', 'Evan', 'My Favorite', 'I love this song and love Adele', 5),
('3', 'Evan', 'My Favorite', 'This song makes me calm', 5),
('2', 'Juliana', 'My Favorite', 'I would recommend this song', 5),
('2', 'David', 'I Love it', 'A little bit sad but I love it', 4),
('2', 'Mr. Mingo', 'My Favorite', 'My top one', 5),
('4', 'Alison', 'Not my Style','I would say this is not my style', 2),
('5', 'Hannah', 'Not Bad', 'Not my favorite style', 3),
('6', 'Gabi', 'My Favorite', 'I would strongly recommend this song to you all', 5);

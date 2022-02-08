\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES 
('Put Your Head On My Shoulder', 'Paul Anka', 'Sings His Favorites', '2:35', true),
('You', 'Galantis', 'Pharmacy', '3:35', true),
('One More Time', 'Daft Punk', 'Discovery', '5:20', true),
('Over The Top', 'Smiley', 'Buy or Bye 2', '2:33', false),
('Smooth Criminal', 'Michael Jackson', 'bad', '4:17', true),
('Gucci Gang', 'Lil Pump', 'Lil Pump', '2:04', false),
('No Role Models', 'J. Cole', '2014 Forest Hills Drive', '4:52', true);

INSERT INTO reviews (song_id, reviewer, title, content, rating ) VALUES
('1', 'Hector', 'Yerrrr', 'Now this is one of my favs, I can listen to this on repeat', 5),
('5', 'Hector', 'Grrrrr', 'Stawppppp you trying to get me to dance', 5),
('4', 'Hector', 'My Least Favorite', 'TRASHHHH!', 1),
('4', 'Christina', 'Im Here', 'Its great!', 5),
('2', 'Laiba', 'What is this?', 'Im not a fan but its ok...(achooo)', 2),
('7', 'James', 'This slaps!', 'One of the classics!', 5),
('5', 'Jenna', 'OH MY GOD!','I grew up to this song, one of my favs!', 5),
('3', 'Josh', 'eah-eah-eah-eah (dolphin noise)', 'eEeEeEeEeEeEeEeEeEeE', 4),
('6', 'Rae', 'Ehhhh No', 'Your doing too much', 0);
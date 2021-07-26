\c songs_dev;

INSERT INTO playlists (title) VALUES
('My first playlist'),
('My second playlist'),
('My third playlist');


INSERT INTO songs (name,artist,album,time,is_favorite, playlist_id) VALUES
('orange moon','Erykah Badu','mamas gun', '1997', true, 1),
('Shop Around','Smokey Robinson and the Miracles', 'unknown', '1990', false,2),
('Miss you', 'The Rolling Stones', 'Some gils', '1978', false, 3);
\c songs_dev;

INSERT INTO playlists (name, is_favorite) 
VALUES 
('Hip-Hop', false ),
('Romantic', true ),
('Spanish', true );

INSERT INTO songs (name, artist, album, time, is_favorite, playlist_id)
VALUES ('I love you','Jodeci', 'Forever My Lady', '1991', false, 2),
    ('WAP','Cardi B', 'Invasion of Privacy', '2018', true, 1),
    ('X','DMX', 'Exodus', '2021', false, 1),
    ('Lemonade','Drake', 'Scorpion', '2018', true, 1),
    ('We on one','DJ Khalid', 'Grateful', '2017', false, 1),
    ('Llora','Anthony Santos', 'Golden', '2017', false, 3),
    ('Hello World','Davido', 'A Good Time', '2020', true, 2);


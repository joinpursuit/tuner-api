\c tuner_db;

INSERT INTO playlists (name, is_favorite) VALUES
('Clasical',true),
('Awesome stuff', false),
('Some Random Stuff', false)
;
INSERT INTO songs (name, artist, album, time, is_favorite, playlist_id) VALUES
('K475', 'Mozart', 'Piano Sonatas', 'depends on who is playing', true,1),
('Moon Light Sonata','Mozart','Piano Sonatas', 'depends', false,1),
('la negra tiene tumbao', 'Celia Cruz','Top Hits', '4.29', false,2),
('YoYo', 'Cocomellon', 'One Two Three', '30 min', false,3),
('Yayaya','Athena','Bababa', 'until she is older', false,3),
('My O My', 'Damien','I need a Vacation', '1 hr', false,3)
;
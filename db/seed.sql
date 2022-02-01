\c songs_dev;

-- name VARCHAR, artist VARCHAR, album VARCHAR, time VARCHAR, is_favorite BOOLEAN -- 

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Kon Karne', 'MF DOOM', 'MM..FOOD', '2:52', TRUE),
('Elevators (Me & You)', 'Outkast', 'ATLiens', '4:25', TRUE),
('Simply Beautiful', 'Al Green', 'I''m Still in Love with You', '4:12', TRUE),
('Glory Box', 'Portishead','Dummy','5:09', TRUE),
('Here I Come','Barrington Levy','Here I Come','3:46',TRUE);

-- psql -U postgres -f db/seed.sql --
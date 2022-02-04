\c tuner_dev

INSERT INTO song (name, artist, album, time, is_favorite) VALUES
('3005', 'Childish Gambino', 'Because the Internet','3:05',TRUE), 
('Girlfriend', 'Avril Lavigne', 'The Best Damn Thing', '3:38', FALSE), 
('You Belong With Me', 'Taylor Swift', 'Fearless','3:52',TRUE),
('Work', 'Charlotte Day Wilson', 'Charlotte Day Wilson', '03:44', TRUE),
('7 years', 'Lukas Graham', 'Lukas Graham', '03:57', FALSE),
('Retrograde', 'James Blake', 'Overgrown', '03:43', TRUE);

SELECT * FROM song;
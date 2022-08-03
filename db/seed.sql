--step 1 connect to database
\c tuner;

--step 2 add pre made data to be able to add
INSERT INTO song (name, artist, album, time, is_favorite) VALUES 
('Running up that hill','Kate Bush','Hounds of Love', 298, false),
('Argentina Dreams','Archer violet','Gemini', 269, true),
('Titi me Pregunto','Bad Bunny','Un verano sin ti', 300, false),
('Brain Damage','Eminem','The slim shady LP', 226, true),
('Thinking Out Loud','Ed Sheeran','x', 281, false);

-- psql -U postgres -f db/seed.sql; 
-- Connect to the database
\c  songs_dev;

-- Populate our table with "seed" data
INSERT INTO
    songs (name, artist, album, time, is_favorite)
VALUES
    ('Billie Eillish', "Happier Than Ever", "Happier Than Ever", "5:15", TRUE),
    ("Finneas", "Lets Fall in Love for the Night", "Blood Harmony", "3:09", TRUE),
    ("Nirvana", "Come As You Are", "Come As You Are", "3:45", TRUE),
    ("Elsa y Elmar", "cómo acaba", "cómo acaba","3:59", TRUE),
    ("Rihanna", "Umbrella", "Good Girl Gone Bad: Reloaded", "4:14", FALSE);

--



-- Connect to the database
\c  songs_dev;

-- Populate our table with 'seed' data
INSERT INTO
    songs (name, artist, album, time, is_favorite)
VALUES
    ('Happier Than Ever', 'Billie Eillish', 'Happier Than Ever', '5:15', TRUE),
    ('Lets Fall in Love for the Night', 'Finneas', 'Blood Harmony', '3:09', TRUE),
    ('Come As You Are', 'Nirvana', 'Come As You Are', '3:45', TRUE),
    ('cómo acaba', 'Elsa y Elmar', 'cómo acaba','3:59', TRUE),
    ('Umbrella', 'Rihanna', 'Good Girl Gone Bad: Reloaded', '4:14', FALSE);

--



-- Connect to the database
\c  songs_dev;

-- Populate our table with 'seed' data
INSERT INTO
    songs (name, artist, album, time, is_favorite)
VALUES
    ('Sunshine', 'POWERS', 'Sunshine', '4:15', TRUE),
    ('Stay Lost', 'Joe Hertz, Amber-Simone, Cabu', 'Stay Lost (Cabu Remix)', '3:47', TRUE),
    ('Addicted', 'Jorja Smith', 'Addicted', '3:24', TRUE),
    ('Waves', 'Miguel feat. Tame Impala', 'Rogue Waves', '4:13', TRUE),
    ('Chemtrails Over The Country Club', 'Lana Del Rey', 'Chemtrails Over The Country Club', '4:31', TRUE),
    ('A Storm on a Summers Day feat. Gaidaa', 'Full Crate ', 'A Storm on a Summers Day','2:58', TRUE),
    ('Lovestained', 'Hope Tala', 'Lovestained', '2:55', FALSE),
    ('Hallucinogenics (Japanese WallPaper & Winona Oak Remix)', 'Matt Maeson', 'Hallucinogenics (Japanese WallPaper & Winona Oak Remix)','3:40', TRUE),
    ('Someone That You Love', 'Jarreau Vandal, Olivia Nelson', 'Someone That You Love', '2:57', FALSE),
    ('Hot Stuff', 'Donna Summer feat. Kygo', 'Hot Stuff', '4:13', FALSE),
    ('Remember', 'KATIE', 'Remember', '3:06', FALSE),
    ('Papaoutai', 'Stromae', 'racine carree', '3:52', FALSE),
    ('Alors On Danse', 'Stromae', 'racine carree', '3:26', TRUE),
    ('R U Mine?', 'Arctic Monkeys', 'AM', '3:21', FALSE),
    ('Whyd You Only Call Me When Youre High', 'Arctic Monkeys', 'AM', '2:41', TRUE),
    ('Do I Wanna Know?', 'Arctic Monkeys', 'AM', '4:32', TRUE),
    ('Party', 'Bad Bunny, Rauw Alejandro', 'Un Verano Sin TI', '3:48', TRUE),
    ('Me Porto Bonito', 'Bad Bunny', 'Un Verano Sin TI', '2:58', TRUE),
    ('Damages', 'Tems', 'Damages', '2:49', FALSE),
    ('Ice T', 'Tems', 'Damages', '2:49', TRUE),
    ('Tonyor', 'Selebobo', 'Tonyor', '3:37', FALSE),
    ('Vamos pra Gaiola', 'MC Kevin o Chris', 'Vamos pra Gaiola', '2:42', FALSE),
    ('Zankyou Sanka', 'Aimer', 'Zankyou Sanka', '3:15', TRUE),
    ('Creep', 'Arlo Parks', 'Creep', '4:38', TRUE),
    ('East of Eden', 'Zella Day', 'Kicker', '3:06', FALSE),
    ('Gooey', 'Glass Animals', 'ZABA', '4:49', FALSE),
    ('Feels', 'Snoh Aalegra', 'FEELS', '3:48', FALSE),
    ('Mountains', 'Charlotte Day Wilson', 'ALPHA', '4:09', FALSE),
    ('MARIJUANA', 'Riles', 'WELCOME TO THE JUNGLE', '2:40', TRUE),
    ('Maps', 'Yeah Yeah Yeahs', 'Fever To Tell', '3:40', TRUE),
    ('Electric Love', 'BORNS', 'Dopamine', '3:38', FALSE),
    ('Passionfruit', 'Yaeji', 'EP2', '4:35', TRUE);
    



    

    


--  
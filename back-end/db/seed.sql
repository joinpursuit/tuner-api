--1) MUST CONNECT TO DATABASE

\c tunes_dev;

--2) ADD PREMADE DATA TO BE ABLE TO ADD

INSERT INTO songs (name, artist, album, time, is_favorite)
    VALUES ('Still Dre', 'Dr Dre', 'Chronic', '3:44', true), 
    ('Its My Life', 'Bon Jovi', 'Greatest Hits', '3:55', false),
    ('Tu Oportunidad', 'Grupo Limite', 'Exitos', '2:52', false),
    ('Rosas', 'La Oreja De Van Gogh', 'Lo Que Te Conte Mientras Te Hacias La Dormida', '3:56', true),
    ('Que No', 'Cafe Tacvba', 'Jei Biebi', '5:25', true),
    ('Tu Me Quemas', 'Eddie Santiago', 'Atrevido Y Diferente', '5:00', true),
    ('Escombros', 'La Suprema Corte', 'Escombros', '3:59', true),
    ('Whats Your Pleasure', 'Jessie Ware', 'Whats Your Pleasure', '4:38', false),
    ('Pa Ti No Estoy', 'Rosana', 'Rosana', '3:44', false),
    ('Pass This On', 'The Knife', 'Deep Cuts', '3:48', true),
    ('Llorona', 'Chavela Vargas', 'Los 30 Grandes De Chavela Vargas', '8:31', false),
    ('Hide And Seek', 'Kodaline', 'Politics Of Living', '3:46', true)
    ;

-- psql -U postgres -f db/seed.sql
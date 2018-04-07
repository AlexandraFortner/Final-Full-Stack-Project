--- ! TABLES !

    create table if not exists users(
        id serial unique primary key,
        username varchar(150) unique,
        password_hash varchar(250),
        profile_picture text,
        profile_summary text
    );

    create table if not exists stories(
        id serial unique primary key,
        story_author_name varchar(150) references users(username),
        story_title varchar(350),
        story_date TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        story text,
        genre_id int references genre (id),
        votes int,
        story_summary text
    );

    create table if not exists genre(
    id serial unique primary key,
    genre_name varchar(200)
    );

--    ALTER TABLE stories
--    ADD COLUMN story_summary text;

--ALTER TABLE users
--   ADD COLUMN repeated_password text;

--    UPDATE stories SET story_summary = 'The very first story made for Nova.' where id = 1;

--____________________________________________________________________________________________


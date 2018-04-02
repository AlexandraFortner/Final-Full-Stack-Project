package com.example.Backend.core;


public class Genre {
    public Integer id;
    public String genre_name;

    public Genre() {}

    public Genre(Integer id,
                 String genre_name) {
        this.id = id;
        this.genre_name = genre_name;
    }
}

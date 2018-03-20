package com.example.Backend.core;
import java.util.*;

public class Story {
    public Integer id;
    public Integer author_id;
    public String title;
    public Date date;
    public String body;
    public Integer genre_id;
    public Integer votes;

    public Story() {}

    public Story(Integer id,
                 Integer author_id,
                 String title,
                 Date date,
                 String body,
                 Integer genre_id,
                 Integer votes ) {
        this.id = id;
        this.author_id = author_id;
        this.title = title;
        this.date = date;
        this.body = body;
        this.genre_id = genre_id;
        this.votes = votes;
        this.votes = votes;

    }

//    @Override
//    public String toString() {
//        return "Story(" + body + ")";
//    }
}
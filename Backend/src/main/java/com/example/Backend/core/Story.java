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
        id = id;
        author_id = author_id;
        title = title;
        date = date;
        body = body;
        genre_id = genre_id;
        votes = votes;

    }

//    @Override
//    public String toString() {
//        return "Story(" + body + ")";
//    }
}
package com.example.Backend.core;
import java.util.*;

public class Story {
    public Integer id;
    public String author_name;
    public String title;
    public Date date;
    public String body;
    public Integer genre_id;
    public Integer votes;
    public String story_summary;

    public Story() {}

    public Story(Integer id,
                 String author_name,
                 String title,
                 Date date,
                 String body,
                 Integer genre_id,
                 Integer votes,
                 String story_summary) {
        this.id = id;
        this.author_name = author_name;
        this.title = title;
        this.date = date;
        this.body = body;
        this.genre_id = genre_id;
        this.votes = votes;
        this.story_summary = story_summary;

    }

//    @Override
//    public String toString() {
//        return "Story(" + body + ")";
//    }
}
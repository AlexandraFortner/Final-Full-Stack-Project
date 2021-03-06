package com.example.Backend.core;
import java.util.*;

public class Story {
    public Integer id;
    public String author_name;
    public String title;
    public Date date;
    public String story;
    public Integer genre_id;
    public String story_summary;

    public Story() {}

    public Story(Integer id,
                 String author_name,
                 String title,
                 Date date,
                 String story,
                 Integer genre_id,
                 String story_summary) {
        this.id = id;
        this.author_name = author_name;
        this.title = title;
        this.date = date;
        this.story = story;
        this.genre_id = genre_id;
        this.story_summary = story_summary;
    }
}
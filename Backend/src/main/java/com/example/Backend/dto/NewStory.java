package com.example.Backend.dto;


public class NewStory {
    public String author_name;
    public String title;
    public String story;
    public Integer genre_id;
    public String story_summary;

    public NewStory() {}

    public NewStory(String author_name,
                 String title,
                 String story,
                 Integer genre_id,
                 String story_summary) {
        this.author_name = author_name;
        this.title = title;
        this.story = story;
        this.genre_id = genre_id;
        this.story_summary = story_summary;
    }
}

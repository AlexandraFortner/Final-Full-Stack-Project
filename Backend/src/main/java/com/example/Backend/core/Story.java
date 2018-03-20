package com.example.Backend.core;

public class Story {
    public String author;
    public String title;
    public String body;

    public Story() {}

    public Story(String a, String t, String b) {
        author = a;
        title = t;
        body = b;
    }

    @Override
    public String toString() {
        return "Story(" + body + ")";
    }
}
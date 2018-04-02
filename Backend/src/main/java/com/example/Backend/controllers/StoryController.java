package com.example.Backend.controllers;

import java.util.*;
import com.example.Backend.core.Story;
import com.example.Backend.db.Stories;
import com.example.Backend.core.Genre;
import com.example.Backend.db.Genres;
import org.springframework.web.bind.annotation.*;

@RestController
public class StoryController {
    @CrossOrigin()
    @GetMapping("/stories")
    public List<Story> all() {
        return Stories.all();
    }

    @CrossOrigin()
    @GetMapping("/genres")
    public List<Genre> allGenres() {
        return Genres.allGenres();
    }

    @CrossOrigin()
    @PostMapping("/newStory")
    public void newStory(@RequestBody Story story) {
        Stories newStory = new Stories(story);
        newStory.create();
    }
}

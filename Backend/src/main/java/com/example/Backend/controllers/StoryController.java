package com.example.Backend.controllers;

import java.util.List;
import com.example.Backend.core.Story;
import com.example.Backend.db.Stories;
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
    public List<Story> allGenres() {
        return Stories.allGenres();
    }

//    @CrossOrigin()
//    @PostMapping("/newStory")
//    public Story newStory(@RequestBody Story story) {
//        Stories.create(story);
//        return story;
//    }
}

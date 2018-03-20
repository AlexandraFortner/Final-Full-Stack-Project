package com.example.Backend.controllers;

import java.util.List;
import com.example.backend.core.Story;
import com.example.backend.db.Story;
import org.springframework.web.bind.annotation.*;

@RestController
public class StoryController {
    @CrossOrigin()
    @GetMapping("/stories")
    public List<Story> all() {
        return Stories.all();
    }

    @CrossOrigin()
    @PostMapping("/newStory")
    public Story newStory(@RequestBody Story story) {
        Stories.create(story);
        return story;
    }

}

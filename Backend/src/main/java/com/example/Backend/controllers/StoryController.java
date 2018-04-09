package com.example.Backend.controllers;

import java.util.*;
import com.example.Backend.db.*;
import com.example.Backend.core.*;
import com.example.Backend.dto.*;
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
    public Story newStory(@RequestBody NewStory story) {
        return Stories.create(story);
    }
}

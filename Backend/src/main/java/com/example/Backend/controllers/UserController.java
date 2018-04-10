package com.example.Backend.controllers;

import com.example.Backend.core.User;
import com.example.Backend.db.Users;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
public class UserController {

    @CrossOrigin()
    @GetMapping("/users")
    public List<User> all() {
        return Users.all();
    }
}

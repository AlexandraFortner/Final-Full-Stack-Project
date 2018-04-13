package com.example.Backend.controllers;

import com.example.Backend.core.User;
import com.example.Backend.dto.*;
import com.example.Backend.db.Users;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
public class UserController {

    @CrossOrigin()
    @GetMapping("/users")
    public List<NewUser> all() {
        return Users.all();
    }

    @CrossOrigin()
    @PostMapping("/deleteUser")
    public boolean deleteUser(@RequestBody DeleteUserRequest r) {
        System.out.println("USER IS: " + r.username);
        Boolean delete = Users.deleteUser(r.username);
        if (delete != false) {
            return delete;
        } else {
            System.out.println("Error.");
            return false;
        }
    }
}

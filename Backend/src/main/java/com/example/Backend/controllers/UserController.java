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
    public boolean deleteUser(SessionKey key) {
        Boolean delete = Users.deleteUser(key.sessionKey);
        if (delete != false) {
            return delete;
        } else {
            System.out.println("Error.");
            return false;
        }
    }
}

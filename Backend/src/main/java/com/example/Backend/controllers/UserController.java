package com.example.Backend.controllers;

import com.example.Backend.core.User;
import com.example.Backend.dto.NewUser;
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

//    @CrossOrigin()
//    @PostMapping("/deleteUser")
//    public NewUser deleteTheUser() {
//        Boolean delete = Users.deleteUser(NewUser);
//        if (delete != true) {
//            return delete;
//        } else {
//            System.out.println("Error.");
//            return null;
//        }
//    }

}

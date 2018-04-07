package com.example.Backend.controllers;

import com.example.Backend.core.SignUp;
import com.example.Backend.core.User;
import com.example.Backend.db.Users;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Value;
import org.mindrot.jbcrypt.BCrypt;
import java.util.*;


@RestController
public class SignUpController {
    @Value("${app.salt}")
    private String salt;
    @CrossOrigin()
    @PostMapping("/SignUp/")
    public User signUp(@RequestBody User newPerson) {

        String hashedPassword = BCrypt.hashpw(newPerson.password_hash, salt);

        User newUser = Users.insertUser(newPerson.username ,hashedPassword);
        if (newUser != null) {
            return newUser;
        } else {
            System.out.println("Error.");
            return null;
        }
    }
}
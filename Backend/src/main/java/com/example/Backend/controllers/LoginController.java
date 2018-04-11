package com.example.Backend.controllers;

import com.example.Backend.core.User;
import com.example.Backend.db.Users;
import com.example.Backend.dto.Login;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Value;
import org.mindrot.jbcrypt.BCrypt;

@RestController
public class LoginController {
    //    SETTING UP THE INITIAL SALT

    @Value("${app.salt}")
    private String salt;

//____________________________________________________________________________________________
@CrossOrigin()
@PostMapping("/login")
public User logIn(@RequestBody Login newPerson) {
    String hashedPassword = BCrypt.hashpw(newPerson.password, salt);

    User newUser = Users.loginUser(newPerson.username ,hashedPassword);
    if (newUser != null) {
        return newUser;
    } else {
        System.out.println("Error.");
        return null;
    }
}
}

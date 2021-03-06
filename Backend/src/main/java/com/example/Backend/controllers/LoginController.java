package com.example.Backend.controllers;

import com.example.Backend.db.SessionRepository;
import com.example.Backend.db.Users;
import com.example.Backend.dto.Login;
import com.example.Backend.dto.SessionKey;

import com.example.Backend.dto.TokenIsValidResponse;


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
    public String logIn(@RequestBody Login newPerson) {
        String hashedPassword = BCrypt.hashpw(newPerson.password, salt);

        String s = Users.sessionKey(newPerson.username, hashedPassword);

        if (s != null) {
            System.out.println("Session Key is: " + s);
            return s;
        } else {
            System.out.println("Error. Session Key is null.");
            return null;
        }
    }

    @CrossOrigin()
    @PostMapping("/tokenIsValid")
    public TokenIsValidResponse tokenIsValid(SessionKey r) {
        return new TokenIsValidResponse(
                SessionRepository.isValid(r.sessionKey)
        );
    }

    @CrossOrigin()
    @PostMapping("/logout")
    public void deleteKey(SessionKey r){
        SessionRepository.deleteToken(r.sessionKey);
    }
}
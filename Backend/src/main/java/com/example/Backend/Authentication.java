package com.example.Backend;

import java.util.*;
import org.springframework.web.bind.annotation.*;
import org.mindrot.jbcrypt.BCrypt;

public class Authentication {
    public static void bcryptPasswords(String password){
        String salt = BCrypt.gensalt();
        String password_hash = BCrypt.hashpw(password, salt);
    }
}

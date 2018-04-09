package com.example.Backend.core;

import java.util.*;

public class User {
    public Integer id;
    public String username;
    public String password_hash;

    public User() {}

    public User(Integer id,
                String username,
                String password_hash) {

        this.id = id;
        this.username = username;
        this.password_hash = password_hash;
    }
}

package com.example.Backend.core;

import java.util.*;

public class User {
    public Integer id;
    public String username;
    public String password_hash;
    public String profile_picture;
    public String profile_summary;

    public User() {
    }

    public User(Integer id,
                String username,
                String password_hash,
                String profile_picture,
                String profile_summary) {

        this.id = id;
        this.username = username;
        this.password_hash = password_hash;
        this.profile_picture = profile_picture;
        this.profile_summary = profile_summary;
    }
}

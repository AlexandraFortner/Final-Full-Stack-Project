package com.example.Backend.dto;

public class Login {

    //Data Transfer Object: A handler of data
    public String username;
    public String password;

    public Login() {}

    public Login(String username, String password) {
        this.username = username;
        this.password = password;
    }
}

package com.example.Backend.dto;

public class SuccessfulLogin {
    //Data Transfer Object: A handler of data
    public Integer id;
    public String username;
    public String session_key;

    public SuccessfulLogin() {}

    public SuccessfulLogin(Integer id, String username, String session_key) {
        this.id = id;
        this.username = username;
        this.session_key = session_key;
    }
}

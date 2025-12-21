package com.example.photoalbum.entities;

public class User {

    private int userId;
    private String username;
    private String login;
    private String password;

    public User(int userId, String username, String login, String password) {
        this.userId = userId;
        this.username = username;
        this.login = login;
        this.password = password;
    }

    public User(String username, String login, String password) {
        this.username = username;
        this.login = login;
        this.password = password;
    }
}

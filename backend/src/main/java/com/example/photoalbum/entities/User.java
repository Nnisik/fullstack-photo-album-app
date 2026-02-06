package com.example.photoalbum.entities;

public class User {

    private long userId;
    private String username;
    private String login;
    private String password;

    public User(String username, String login, String password) {
        this.username = username;
        this.login = login;
        this.password = password;
    }

    public User(long userId, String username, String login, String password) {

        this.userId = userId;
        this.username = username;
        this.login = login;
        this.password = password;
    }

    public long getUserID() {
        return this.userId;
    }

    public String getUserUsername() {
        return this.username;
    }

    public String getUserLogin() {
        return this.login;
    }

    public String getUserPassword() {
        return this.password;
    }
}

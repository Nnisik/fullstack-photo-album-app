package com.example.photoalbum.entities;

import java.time.LocalDateTime;

public class User {

    private long userId;
    private String username;
    private String login;
    private String password;
    private LocalDateTime userCreatedDate;

    public User(String username, String login, String password, LocalDateTime userCreatedDate) {
        this.username = username;
        this.login = login;
        this.password = password;
        this.userCreatedDate = userCreatedDate;
    }

    public User(long userId, String username, String login, String password,LocalDateTime userCreatedDate) {
        this.userId = userId;
        this.username = username;
        this.login = login;
        this.password = password;
        this.userCreatedDate = userCreatedDate;
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

    public LocalDateTime getUserCreatedDate() {
        return this.userCreatedDate;
    }
}

package com.example.photoalbum.service;

import jakarta.persistence.*;


// TODO: try starting the app WITH CONNECTED DB
@Table
@Entity
public class UserEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private int userId;
    @Column(name = "username")
    private String username;
    @Column(name = "login")
    private String login;
    @Column(name = "password")
    private String password;

    public UserEntity() {}

    public UserEntity(int userId, String username, String login, String password) {
        this.userId = userId;
        this.username = username;
        this.login = login;
        this.password = password;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

}

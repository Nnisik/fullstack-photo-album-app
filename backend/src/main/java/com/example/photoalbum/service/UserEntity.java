package com.example.photoalbum.service;

import jakarta.persistence.*;

import java.time.LocalDateTime;

// TODO: try starting the app WITH CONNECTED DB
@Table
@Entity
public class UserEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private long userId;

    @Column(name = "username")
    private String username;

    @Column(name = "login")
    private String login;

    @Column(name = "password")
    private String password;

    @Column(name = "create_date")
    private LocalDateTime createDate;

    public UserEntity() {}

    public UserEntity(long userId, String username, String login, String password, LocalDateTime createDate) {
        this.userId = userId;
        this.username = username;
        this.login = login;
        this.password = password;
        this.createDate = createDate;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return this.id;
    }

}

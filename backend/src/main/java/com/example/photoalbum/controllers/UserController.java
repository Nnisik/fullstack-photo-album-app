package com.example.photoalbum.controllers;

import com.example.photoalbum.entities.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @RequestMapping("/api/user")
    public User getUser() {
        return new User(1, "User 1", "login", "password");
    }
}

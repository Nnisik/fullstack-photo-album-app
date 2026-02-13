package com.example.photoalbum.controllers;

import com.example.photoalbum.entities.User;
import com.example.photoalbum.service.UserService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("api_v1/user")
public class UserController {

    // making logger
    private static final Logger log = LoggerFactory.getLogger(UserController.class);

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        log.info("Called getAllUsers");
        return ResponseEntity.status(200)
                .body(UserService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") long userId) {
        log.info("Called getUserByID with id = {}", userId);

        try {
            return ResponseEntity.status(200)
                    .body(UserService.getUserById(userId));
        }
        catch (NoSuchElementException e) {
            return ResponseEntity.status(404)
                    .build();
        }
    }

    @PostMapping
    // ResponseEntity<T> allows to set up how the API call will look like
    public ResponseEntity<User> createUser(@RequestBody User userToCreate) { // @RequestBody converts object <-> json
        log.info("Called createUser");
        try {
            // return for response entity
            return ResponseEntity.status(201)
                    .body(userService.createUser(userToCreate));
        }
        catch (IllegalArgumentException e) {
            return ResponseEntity.status(404)
                    .build();
        }
    }

    // FIXME: rework userToUpdate varuables OR separate methods
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") Long id, @RequestBody User userToUpdate) {
        log.info("Called updateUser");
        try {
            return ResponseEntity.status(200)
                    .body(UserService.updateUser(id, userToUpdate));
        }
        catch (NoSuchElementException e) {
            return ResponseEntity.status(404)
                    .build();
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) {
        log.info("Called deleteUser with id", id);
        try {
            userService.deleteUser(id);
            return ResponseEntity.ok()
                    .build();
        }
        catch (NoSuchElementException e) {
            return ResponseEntity.status(404)
                    .build();
        }
    }
}

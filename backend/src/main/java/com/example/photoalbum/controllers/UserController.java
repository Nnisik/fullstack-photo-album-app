package com.example.photoalbum.controllers;

import com.example.photoalbum.entities.User;
import com.example.photoalbum.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatusCode;
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

    // TODO: add error handler
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        log.info("Called getAllUsers");
        return ResponseEntity.status(200)
                .body(UserService.getAllUsers());
    }

    // TODO: add error handler
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") long userId) {
        log.info("Called getUserByID with id = " + userId);
        return ResponseEntity.status(200)
                .body(UserService.getUserById(userId));
    }

    // TODO: add error handler
    @PostMapping
    // ResponseEntity<T> allows to set up how the API call will look like
    public ResponseEntity<User> createUser(@RequestBody User userToCreate) { // @RequestBody converts object <-> json
        log.info("Called createUser");
        // return for responce entity
        return ResponseEntity.status(201)
                .header("test-header", "123")
                .body(userService.createUser(userToCreate));
        /*
        This return is for when there is no response entity
        return userService.createUser(userToCreate); // sending request to service-specific class to do it
         */

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
        log.info("Called deleteUser");
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

package com.example.photoalbum.controllers;


import com.example.photoalbum.entities.Post;
import com.example.photoalbum.service.PostService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("api_v1/post")
public class PostController {

    private static final Logger log = LoggerFactory.getLogger(PostController.class);

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public ResponseEntity<List<Post>> getAllPosts() {
        log.info("Called getAllPosts");
        return ResponseEntity.status(200)
                .body(PostService.getAllPosts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable("id") long id) {
        log.info("Called getPostByID with id = {}", id);

        try {
            return ResponseEntity.status(200)
                    .body(PostService.getPostById(id));
        }
        catch (NoSuchElementException e) {
            return ResponseEntity.status(404)
                    .build();
        }
    }
}

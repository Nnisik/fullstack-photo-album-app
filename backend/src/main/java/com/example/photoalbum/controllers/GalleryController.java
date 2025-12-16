package com.example.photoalbum.controllers;


import com.example.photoalbum.entities.Gallery;
import com.example.photoalbum.entities.Post;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GalleryController {

    @RequestMapping("/api/gallery")
    public Gallery getGallery() {
        Gallery gallery = new Gallery();

        gallery.addPost(new Post(1, "Cat", "https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"));
        gallery.addPost(new Post(2, "Meme Cat", "https://preview.redd.it/random-question-but-does-anyone-have-versions-of-this-cat-v0-ya8qikz9kn0f1.png?auto=webp&s=c2fdba9a3904ab3bec9e7367e380f66343c2929a"));

        return gallery;
    }
}

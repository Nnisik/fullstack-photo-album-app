package com.example.photoalbum.entities;

import java.util.ArrayList;

public class Gallery {

    private final ArrayList<Post> gallery = new ArrayList<Post>();

    public void addPost(Post post) {
        this.gallery.add(post);
    }

    public void deletePost(int postId) {
        this.gallery.remove(postId);
    }

    public void likePost(int postId) {
        this.gallery.get(postId).likePost();
    }
}

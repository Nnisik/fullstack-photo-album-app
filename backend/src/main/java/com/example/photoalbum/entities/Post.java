package com.example.photoalbum.entities;

public class Post {
    private final int id;
    private String name;
    private boolean liked = false;
    private String imgLink;


    public Post(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public Post(int id, String name, String imgLink) {
        this.id = id;
        this.name = name;
        this.imgLink = imgLink;
    }

    public int getPostId() {
        return this.id;
    }

    private void setPostName(String name) {
        this.name = name;
    }

    public String getPostName() {
        return this.name;
    }

    public void likePost() {
        this.liked = true;
    }

    public void dislikePost() {
        this.liked = false;
    }

    public void setImgLink(String imgLink) {
        this.imgLink = imgLink;
    }

}

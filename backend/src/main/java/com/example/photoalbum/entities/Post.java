package com.example.photoalbum.entities;

import java.time.LocalDateTime;

public class Post {
    private long id;
    private String text;
    private String imgLink = "";
    private LocalDateTime uploadDate = LocalDateTime.now();
    private User creatorId;

    public Post(long id, String text, String imgLink, User creatorId) {
        this.id = id;
        this.text = text;
        this.imgLink = imgLink;
        this.creatorId = creatorId;
    }

    public Post(long id, String text, String imgLink) {
        this.id = id;
        this.text = text;
        this.imgLink = imgLink;
    }

    public Post(String text, String imgLink) {
        this.text = this.text;
        this.imgLink = imgLink;
    }

    public long getPostId() {
        return this.id;
    }

    public String getPostName() {
        return this.text;
    }

    private void setPostName(String name) {
        this.text = name;
    }

    public String getPostImgLink() {
        return this.imgLink;
    }

    public void setPostImgLink(String imgLink) {
        this.imgLink = imgLink;
    }

}

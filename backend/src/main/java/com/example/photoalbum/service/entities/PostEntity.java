package com.example.photoalbum.service.entities;

import jakarta.persistence.*;

// TODO: try starting the app WITH CONNECTED DB
@Table
@Entity
public class PostEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "post_id")
    private long postId;

    @Column(name = "text")
    private String text;

    @Column(name = "post_img")
    private String postImg;

    @Column(name = "creator_id")
    private long creatorId;

    public PostEntity() {}

    public PostEntity(long postId, String text, String postImg, long creatorId) {
        this.postId = postId;
        this.text = text;
        this.postImg = postImg;
        this.creatorId = creatorId;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return this.id;
    }
}

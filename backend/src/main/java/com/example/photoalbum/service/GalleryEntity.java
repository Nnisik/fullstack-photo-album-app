package com.example.photoalbum.service;

import com.example.photoalbum.entities.Post;
import jakarta.persistence.*;

import java.util.ArrayList;

@Table(name = "posts")
@Entity
// this entity is needed for Hibernate to use it for DB
// Hibernate will automaticale work with tables
public class GalleryEntity {
    @Id
    // how DB is going to create IDs
    // it will itself create IDs for entities
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private ArrayList<Post> gallery = new ArrayList<Post>();


    public GalleryEntity() {
    }

    public GalleryEntity(Long id, ArrayList<Post> gallery) {
        this.id = id;
        this.gallery = gallery;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}

package com.example.photoalbum.service;

import com.example.photoalbum.entities.Post;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class PostService {

    private static Map<Long, Post> postMap;
    private AtomicLong idCounter = null;

    public static List<Post> getAllPosts() {
        return postMap.values().stream().toList();
    }

    public static Post getPostById(long id) {

        if (!postMap.containsKey(id)) {
            throw new NoSuchElementException("Not found user by id = " + id);
        }
        return postMap.get(id);
    }

    public Post createPost(Post postToCreate) {

        if (Long.valueOf(postToCreate.getPostId()).equals(null)) {
            throw new IllegalArgumentException("New Post failed to create -- new post should not contain ID");
        }

        var newPost = new Post(
                idCounter.incrementAndGet(),
                postToCreate.getPostName(),
                postToCreate.getPostImgLink()
        );

        postMap.put(newPost.getPostId(), newPost);
        return newPost;
    }

    public Post updateUser(Long id, Post postToUpdate) {

        if (!postMap.containsKey(id)) {
            throw new NoSuchElementException("such post doesn't exist");
        }

        var newPost = new Post(
                idCounter.incrementAndGet(),
                postToUpdate.getPostName(),
                postToUpdate.getPostImgLink()
        );

        postMap.put(newPost.getPostId(), newPost);
        return newPost;
    }

    public void deletePost(Long id) {
        if (!postMap.containsKey(id)) {
            throw new NoSuchElementException("such post doesn't exist");
        }
        postMap.remove(id);
    }
}

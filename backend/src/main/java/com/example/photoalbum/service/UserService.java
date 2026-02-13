package com.example.photoalbum.service;

import com.example.photoalbum.entities.User;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.List;
import java.util.HashMap;
import java.util.NoSuchElementException;
import java.util.concurrent.atomic.AtomicLong;

// does BUSINESS LOGIC
@Service
public class UserService {

    private static Map<Long, User> userMap;
    private AtomicLong idCounter = null;

    public UserService(AtomicLong idCounter) {
        userMap = new HashMap<>();
        this.idCounter = idCounter;
    }

    public static List<User> getAllUsers() {
        return userMap.values().stream().toList();
    }

    public static User getUserById(long id) {
        if (!userMap.containsKey(id)) {
            throw new NoSuchElementException("Not found user by id = " + id);
        }
        return userMap.get(id);
    }

    public User createUser(User userToCreate) {
        // server gives IDs, not user so need to check
        if (Long.valueOf(userToCreate.getUserID()).equals(null)) {
            throw new IllegalArgumentException("id should be empty");
        }

        // create new object (with ID this time)
        var newUser = new User(
                idCounter.incrementAndGet(),
                userToCreate.getUserUsername(),
                userToCreate.getUserLogin(),
                userToCreate.getUserPassword(),
                userToCreate.getUserCreatedDate()
        );

        userMap.put(newUser.getUserID(), newUser);
        return newUser;
    }

    public static User updateUser(Long id, User userToUpdate) {
        if (!userMap.containsKey(id)) {
            throw new NoSuchElementException("such user doesn't exist");
        }

        var updatedUser = new User(
                id,
                userToUpdate.getUserUsername(),
                userToUpdate.getUserLogin(),
                userToUpdate.getUserPassword(),
                userToUpdate.getUserCreatedDate()
        );
        userMap.put(id, updatedUser);
        return updatedUser;
    }

    public void deleteUser(Long id) {
        if (!userMap.containsKey(id)) {
            throw new NoSuchElementException("such user doesn't exist");
        }
        userMap.remove(id);
    }

}

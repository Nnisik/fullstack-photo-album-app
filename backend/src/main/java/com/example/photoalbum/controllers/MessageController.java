package com.example.photoalbum.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {

    @RequestMapping("/hello")
    public void sayHello() {
        System.out.println("hello world");
    }
}

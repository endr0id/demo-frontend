package com.example.demo.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.LoginRequest;

@RestController
public class Login {

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest requestBody) {

        return "";
    }
    
}

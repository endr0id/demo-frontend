package com.example.demo.dto;

import org.springframework.beans.factory.annotation.Autowired;

public class LoginRequest {
    
    @Autowired
    String user;

    @Autowired
    String email;

    @Autowired
    String password;

}

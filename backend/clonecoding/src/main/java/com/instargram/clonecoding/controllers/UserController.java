package com.instargram.clonecoding.controllers;

import com.instargram.clonecoding.entity.User;
import com.instargram.clonecoding.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    @PostMapping("/signin")
    public User insertUser(@RequestBody User user) {
        // TODO: 2023/07/21 DB에 유저 정보 저장

        return userService.saveUser(user);
    }

}

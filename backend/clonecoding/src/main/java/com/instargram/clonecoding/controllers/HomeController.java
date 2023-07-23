package com.instargram.clonecoding.controllers;

import com.instargram.clonecoding.entity.User;
import com.instargram.clonecoding.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/home")
public class HomeController {

    @Autowired
    private UserService userService;

    //http://localhost:8080/home/users
    @GetMapping("/users")
    public List<User> getUser()
    {
        System.out.println("getting users");
        return userService.getUsers();
    }

    @GetMapping("/current-user")
    public String getLoggedInUser(Principal pringcipal)
    {
        return pringcipal.getName();
    }

}

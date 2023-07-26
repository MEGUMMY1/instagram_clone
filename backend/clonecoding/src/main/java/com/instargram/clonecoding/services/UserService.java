package com.instargram.clonecoding.services;

import com.instargram.clonecoding.User.JwtRequest;
import com.instargram.clonecoding.entity.User;
import com.instargram.clonecoding.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User saveUser(User user) {
        User saveUser = userRepository.save(user);

        return saveUser;
    }

    public boolean saveUserToken(String userid, String token)
    {

        Optional<User> userFound = userRepository.findByUserid(userid);
        if(userFound.isEmpty()) return false;

        User user = userFound.get();
        user.setToken(token);
        userRepository.save(user);
        return true;
    }

    public String findUserIdentificationFromDatabase(JwtRequest request)
    {

        Optional<User> foundedUser = userRepository.findByUserid(request.getUserid());
        if(foundedUser.isEmpty()) return "Invalid Id";

        User user = foundedUser.get();

        if(!user.getPassword().equals(request.getPassword())) return "Invalid Password";
        return "Login Success";

    }

//    private List<User> store = new ArrayList<>();
//
//    public UserService()
//    {
//        store.add(new User(UUID.randomUUID().toString(), "junseop", "junseop"));
//        store.add(new User(UUID.randomUUID().toString(), "b", "b@gmail.com"));
//        store.add(new User(UUID.randomUUID().toString(), "c", "c@gmail.com"));
//        store.add(new User(UUID.randomUUID().toString(), "d", "d@gmail.com"));
//    }
//
    public List<User> getUsers()
    {
        List<User> all = userRepository.findAll();
        return all;
    }
}

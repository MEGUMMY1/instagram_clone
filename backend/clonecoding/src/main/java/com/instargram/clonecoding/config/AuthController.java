package com.instargram.clonecoding.config;

import com.instargram.clonecoding.User.JwtRequest;
import com.instargram.clonecoding.User.JwtResponse;
import com.instargram.clonecoding.security.JwtHelper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import com.instargram.clonecoding.services.UserService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;


@Slf4j
@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {
    private final UserService userService;
    private final UserDetailsService userDetailsService;
    private final AuthenticationManager manager;
    private final JwtHelper helper;


    private Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest request) {

        log.info(request.getUserid());

        JwtResponse response;
        String userIdentificationFromDatabase = userService.findUserIdentificationFromDatabase(request);

        if(userIdentificationFromDatabase.equals("Login Success"))
        {
            String token = this.helper.generateToken(request.getUserid());

            response = JwtResponse.builder()
                    .jwtToken(token)
                    .username(request.getUserid()).build();

            boolean isTokenSaved = userService.saveUserToken(request.getUserid(), token);



            return new ResponseEntity<>(response, HttpStatus.OK);
        }

        response = JwtResponse.builder().username(request.getUserid()).build();
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);


    }
    @ExceptionHandler(BadCredentialsException.class)
    public String exceptionHandler() {
        return "Credentials Invalid !!";
    }

}

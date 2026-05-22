package com.ensharp.minosignup.user.controller;

import com.ensharp.minosignup.user.dto.request.SignUpRequest;
import com.ensharp.minosignup.user.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/auth")
public class UserController {

    private final UserService userService;

    public UserController(
            UserService userService
    ) {
        this.userService = userService;
    }

    @PostMapping(value = "/signup")
    public String signUp(@Valid @RequestBody SignUpRequest request) {
        userService.signUp(request);

        return request.username() + " 님 회원가입 성공 !";
    }

}

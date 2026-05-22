package com.ensharp.minosignup.user.controller;

import com.ensharp.minosignup.user.dto.request.SignUpRequest;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/auth")
public class UserController {

    @PostMapping(value = "/signup")
    public String signUp(@Valid @RequestBody SignUpRequest signUpRequest) {
        return signUpRequest.toString();
    }

}

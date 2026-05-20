package com.ensharp.minosignup.user.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/email-verification")
public class EmailVerificationController {

    @PostMapping(value = "/request")

    @PostMapping(value = "/confirm")

}

package com.ensharp.minosignup.user.controller;

import com.ensharp.minosignup.user.dto.request.EmailExistsRequest;
import com.ensharp.minosignup.user.dto.request.LoginRequest;
import com.ensharp.minosignup.user.dto.request.SignupRequest;
import com.ensharp.minosignup.user.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping(value = "/api/v1/auth")
public class UserController {

    private final UserService userService;

    public UserController(
            UserService userService
    ) {
        this.userService = userService;
    }

    @PostMapping(value = "/check-email-exists")
    public ResponseEntity<Map<String, String>> checkEmailExists(@RequestBody @Valid EmailExistsRequest request) {

        userService.checkEmailExists(request);

        String message = "입력하신 이메일 주소(" + request.email() +")는 등록 가능합니다.";
        Map<String, String> response = Map.of("message", message);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);
    }

    @PostMapping(value = "/signup")
    public ResponseEntity<Map<String, String>> signup(@RequestBody @Valid SignupRequest request) {

        userService.signup(request);

        String message = request.username() + "(" + request.email() + ")" + " 님이 성공적으로 회원가입 하였습니다.";
        Map<String, String> response = Map.of("message", message);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);

    }

    @PostMapping(value = "login")
    public ResponseEntity<Map<String, String>> login(@RequestBody @Valid LoginRequest request) {

        userService.login(request);

        String message = userService.getUsername(request) + "(" + request.email() + ")" + " 님이 로그인 하였습니다.";
        Map<String, String> response = Map.of("message", message);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);

    }

}

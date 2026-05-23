package com.ensharp.minosignup.user.controller;

import com.ensharp.minosignup.user.dto.request.*;
import com.ensharp.minosignup.user.dto.response.UserProfileResponse;
import com.ensharp.minosignup.user.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Tag(name = "USER", description = "유저 관련 API")
@RestController
@RequestMapping(value = "/api/v1/auth")
public class UserController {

    private final UserService userService;

    public UserController(
            UserService userService
    ) {
        this.userService = userService;
    }

    @Operation(
            summary = "이메일 가입 여부 조회",
            description = "입력된 이메일이 시스템에 등록되어 있는지 조회합니다."
    )
    @PostMapping(value = "/check-email-exists")
    public ResponseEntity<Map<String, String>> checkEmailExists(
            @Valid @RequestBody EmailExistsRequest request
    ) {

        userService.checkEmailExists(request);

        String message = "입력하신 이메일 주소(" + request.email() +")는 등록이 가능합니다";
        Map<String, String> response = Map.of("message", message);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);
    }

    @Operation(
            summary = "회원가입",
            description = "유저 정보를 입력받아 새로운 유저를 시스템에 등록합니다."
    )
    @PostMapping(value = "/signup")
    public ResponseEntity<Map<String, String>> signup(
            @Valid @RequestBody SignupRequest request
    ) {

        userService.signup(request);

        String message = request.username() + "(" + request.email() + ")" + " 님이 성공적으로 회원가입 하였습니다";
        Map<String, String> response = Map.of("message", message);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);

    }

    @Operation(
            summary = "로그인",
            description = "이메일과 비밀번호를 입력받아 로그인합니다."
    )
    @PostMapping(value = "/login")
    public ResponseEntity<Map<String, String>> login(
            @Valid @RequestBody LoginRequest request
    ) {

        userService.login(request);

        String message = userService.getUsernameByLogin(request) + "(" + request.email() + ")" + " 님이 로그인 하였습니다";
        Map<String, String> response = Map.of("message", message);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);

    }

    @Operation(
            summary = "비밀번호 변경",
            description = "새로운 비밀번호를 입력받아 비밀번호를 변경합니다."
    )
    @PatchMapping(value = "/reset-password")
    public ResponseEntity<Map<String, String>> resetPassword(
            @Valid @RequestBody ResetPasswordRequest request
    ) {

        userService.resetPassword(request);

        String message = "비밀번호 재설정에 성공하였습니다";
        Map<String, String> response = Map.of("message", message);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);

    }

    @Operation(
            summary = "유저 프로필 조회",
            description = "입력받은 이메일의 유저 프로필을 조회합니다."
    )
    @GetMapping(value = "/profile")
    public ResponseEntity<UserProfileResponse> getUserProfile(
            @Valid UserProfileRequest request
    ) {

        UserProfileResponse response = userService.getUserProfile(request);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);
    }

}

package com.ensharp.minosignup.user.controller;

import com.ensharp.minosignup.user.dto.request.*;
import com.ensharp.minosignup.user.dto.response.*;
import com.ensharp.minosignup.user.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "USER", description = "유저 관련 API")
@RestController
@RequestMapping(value = "/api/v1/users")
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
    @PostMapping(value = "/email-availability")
    public ResponseEntity<EmailExistsResponse> checkEmailExists(
            @Valid @RequestBody EmailExistsRequest request
    ) {

        userService.checkEmailExists(request);

        EmailExistsResponse response = new EmailExistsResponse(
                HttpStatus.OK.value(),
                "EMAIL_EXISTS",
                "(" + request.email() + ") 이메일 주소 등록이 가능합니다"
        );

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);

    }

    @Operation(
            summary = "회원가입",
            description = "유저 정보를 입력받아 새로운 유저를 시스템에 등록합니다."
    )
    @PostMapping
    public ResponseEntity<SignupResponse> signup(
            @Valid @RequestBody SignupRequest request
    ) {

        userService.signup(request);

        SignupResponse response = new SignupResponse(
                HttpStatus.CREATED.value(),
                "SIGNUP",
                "(" + request.email() + ") 회원가입 하였습니다"
        );

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);

    }

    @Operation(
            summary = "비밀번호 변경",
            description = "새로운 비밀번호를 입력받아 비밀번호를 변경합니다."
    )
    @PatchMapping(value = "/me/password")
    public ResponseEntity<ResetPasswordResponse> resetPassword(
            @Valid @RequestBody ResetPasswordRequest request
    ) {

        userService.resetPassword(request);

        ResetPasswordResponse response = new ResetPasswordResponse(
                HttpStatus.OK.value(),
                "RESET_PASSWORD",
                "(" + request.email() + ") 비밀번호 재설정에 성공하였습니다."
        );

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);

    }

    @Operation(
            summary = "유저 프로필 조회",
            description = "입력받은 이메일의 유저 프로필을 조회합니다."
    )
    @GetMapping(value = "/me/profile")
    public ResponseEntity<UserProfileResponse> getUserProfile(
            @Valid UserProfileRequest request
    ) {

        UserProfileResponse response = userService.getUserProfile(request);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);
    }

}

package com.ensharp.minosignup.admin.controller;

import com.ensharp.minosignup.admin.dto.request.DeleteUserRequest;
import com.ensharp.minosignup.admin.service.AdminService;
import com.ensharp.minosignup.user.dto.response.UserProfileResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@Tag(name = "ADMIN", description = "관리자 관련 API")
@RestController
@RequestMapping(value = "/api/v1/admin")
public class AdminController {

    private final AdminService adminService;

    public AdminController(
            AdminService adminService
    ) {
        this.adminService = adminService;
    }

    @Operation(
            summary = "모든 유저 프로필 조회",
            description = "등록된 모든 유저의 유저 프로필을 조회합니다."
    )
    @GetMapping(value = "/all-user-profile")
    public ResponseEntity<List<UserProfileResponse>> getAllUserProfile() {

        List<UserProfileResponse> response = adminService.getAllUserProfile();

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);

    }

    @Operation(
            summary = "유저 삭제",
            description = "입력받은 이메일의 유저를 삭제합니다."
    )
    @DeleteMapping(value = "/delete-user")
    public ResponseEntity<Map<String, String>> deleteUser(
            @Valid DeleteUserRequest request
    ) {

        adminService.deleteUser(request);

        String message = request.email() + " 유저를 등록된 유저 목록에서 제거하였습니다";
        Map<String, String> response = Map.of("message", message);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);

    }

    @Operation(
            summary = "이메일 인증 기록 초기화",
            description = "이메일 인증 기록을 초기화합니디."
    )
    @DeleteMapping(value = "/clear-email-verification")
    public ResponseEntity<Map<String, String>> clearEmailVerification() {

        adminService.clearEmailVerification();

        String message = "이메일 인증 기록을 초기화하였습니다.";
        Map<String, String> response = Map.of("message", message);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);

    }

}

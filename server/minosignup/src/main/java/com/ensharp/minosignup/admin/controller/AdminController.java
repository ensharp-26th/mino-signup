package com.ensharp.minosignup.admin.controller;

import com.ensharp.minosignup.admin.dto.request.DeleteUserRequest;
import com.ensharp.minosignup.admin.dto.response.ClearEmailVerificationResponse;
import com.ensharp.minosignup.admin.dto.response.DeleteUserResponse;
import com.ensharp.minosignup.admin.service.AdminService;
import com.ensharp.minosignup.user.dto.response.UserProfileResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @GetMapping(value = "/users")
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
    @DeleteMapping(value = "/user")
    public ResponseEntity<DeleteUserResponse> deleteUser(
            @Valid @RequestBody DeleteUserRequest request
    ) {

        adminService.deleteUser(request);

        DeleteUserResponse response = new DeleteUserResponse(
                HttpStatus.OK.value(),
                "DELETE_USER",
                "(" + request.email() + ") 등록된 유저 목록에서 제거하였습니다"
        );

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);

    }

    @Operation(
            summary = "이메일 인증 기록 초기화",
            description = "모든 이메일 인증 기록을 초기화합니디."
    )
    @DeleteMapping(value = "/email-verifications")
    public ResponseEntity<ClearEmailVerificationResponse> clearEmailVerification() {

        adminService.clearEmailVerification();

        ClearEmailVerificationResponse response = new ClearEmailVerificationResponse(
                HttpStatus.OK.value(),
                "CLEAR_EMAIL_VERIFICATION",
                "이메일 인증 기록을 초기화하였습니다."
        );

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);

    }

}

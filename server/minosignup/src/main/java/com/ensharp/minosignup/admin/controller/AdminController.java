package com.ensharp.minosignup.admin.controller;

import com.ensharp.minosignup.admin.dto.request.DeleteUserRequest;
import com.ensharp.minosignup.admin.service.AdminService;
import com.ensharp.minosignup.user.dto.response.UserProfileResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/v1/admin")
public class AdminController {

    private final AdminService adminService;

    public AdminController(
            AdminService adminService
    ) {
        this.adminService = adminService;
    }

    @GetMapping(value = "/all-user-profile")
    public ResponseEntity<List<UserProfileResponse>> getAllUserProfile() {

        List<UserProfileResponse> response = adminService.getAllUserProfile();

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);

    }

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

}

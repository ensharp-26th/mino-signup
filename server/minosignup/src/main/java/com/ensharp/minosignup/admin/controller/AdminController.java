package com.ensharp.minosignup.admin.controller;

import com.ensharp.minosignup.admin.service.AdminService;
import com.ensharp.minosignup.user.dto.response.UserProfileResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
}

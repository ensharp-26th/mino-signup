package com.ensharp.minosignup.user.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record SignupRequest(

    @NotBlank
    @Email
    String email,

    @Pattern(
            regexp = "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+={}\\[\\]|\\\\:;\"'<>,.?/-]).{8,16}$",
            message = "올바른 형식의 비밀번호여야 합니다"
    )
    String password,

    @NotBlank
    String username,

    @NotBlank
    String streetAddress,

    String detailAddress

) { }

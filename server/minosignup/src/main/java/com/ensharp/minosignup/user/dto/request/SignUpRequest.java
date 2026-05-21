package com.ensharp.minosignup.user.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record SignUpRequest(

    @NotBlank
    @Email
    String email,

    @NotBlank
    @Pattern(regexp = "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+={}\\[\\]|\\\\:;\"'<>,.?/-]).{8,16}$")
    String password,

    @NotBlank
    String username,

    @NotBlank
    String streetAddress,

    String detailAddress

) { }

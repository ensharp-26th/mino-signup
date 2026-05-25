package com.ensharp.minosignup.user.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record SignupRequest(

        @Schema(example = "k9425mino@ensharp.com")
        @NotBlank
        @Email
        String email,

        @Schema(example = "Mino1234*")
        @Pattern(
                regexp = "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+={}\\[\\]|\\\\:;\"'<>,.?/-]).{8,16}$",
                message = "올바른 형식의 비밀번호여야 합니다"
        )
        String password,

        @Schema(example = "김민오")
        @NotBlank
        String username,

        @Schema(example = "세종대학교 엔샵")
        @NotBlank
        String streetAddress,

        @Schema(example = "학생회관 530호")
        String detailAddress

) { }

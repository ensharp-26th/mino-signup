package com.ensharp.minosignup.user.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record ResetPasswordRequest(

        @Schema(example = "k9425mino@ensharp.com")
        @NotBlank
        @Email
        String email,

        @Schema(example = "Mino9999*")
        @NotBlank
        @Pattern(
                regexp = "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+={}\\[\\]|\\\\:;\"'<>,.?/-]).{8,16}$",
                message = "올바른 형식의 비밀번호여야 합니다"
        )
        String newPassword

) { }

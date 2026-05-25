package com.ensharp.minosignup.emailverification.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record EmailVerifyRequest(

        @Schema(example = "k9425mino@ensharp.com")
        @NotBlank
        @Email
        String email,

        @Schema(example = "123456")
        @NotBlank
        @Size(
                min = 6, max = 6,
                message = "올바른 형식의 인증번호여야 합니다"
        )
        String verificationCode

) { }

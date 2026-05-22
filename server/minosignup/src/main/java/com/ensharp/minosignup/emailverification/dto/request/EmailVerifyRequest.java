package com.ensharp.minosignup.emailverification.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record EmailVerifyRequest(

        @NotBlank
        @Email
        String email,

        @NotBlank
        @Size(
                min = 6, max = 6,
                message = "올바른 형식의 인증번호여야 합니다"
        )
        String verificationCode

) { }

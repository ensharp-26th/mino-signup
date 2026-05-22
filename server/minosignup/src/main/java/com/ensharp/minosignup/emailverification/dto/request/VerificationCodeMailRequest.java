package com.ensharp.minosignup.emailverification.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record VerificationCodeMailRequest(

        @NotBlank
        @Email
        String email

) { }

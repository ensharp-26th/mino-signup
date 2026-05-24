package com.ensharp.minosignup.emailverification.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record VerificationCodeMailRequest(

        @Schema(example = "k9425mino@ensharp.com")
        @NotBlank
        @Email
        String email

) { }

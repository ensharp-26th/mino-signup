package com.ensharp.minosignup.admin.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record DeleteUserRequest(

        @Schema(example = "k9425mino@ensharp.com")
        @NotBlank
        @Email
        String email

) { }

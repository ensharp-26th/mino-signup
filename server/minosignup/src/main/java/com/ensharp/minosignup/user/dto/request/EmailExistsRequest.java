package com.ensharp.minosignup.user.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record EmailExistsRequest(

        @Schema(example = "k9425mino@ensharp.com")
        @NotBlank
        @Email
        String email

) { }

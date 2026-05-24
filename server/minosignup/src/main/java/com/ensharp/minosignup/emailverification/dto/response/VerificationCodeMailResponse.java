package com.ensharp.minosignup.emailverification.dto.response;

public record VerificationCodeMailResponse(

        int status,

        String code,

        String message

) {
}

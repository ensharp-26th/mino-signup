package com.ensharp.minosignup.emailverification.dto.response;

public record EmailVerifyResponse(

        int status,

        String code,

        String message

) {
}

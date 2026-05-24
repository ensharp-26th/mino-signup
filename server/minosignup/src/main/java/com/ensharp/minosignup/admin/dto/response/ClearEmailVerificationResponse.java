package com.ensharp.minosignup.admin.dto.response;

public record ClearEmailVerificationResponse(

        int status,

        String code,

        String message

) { }

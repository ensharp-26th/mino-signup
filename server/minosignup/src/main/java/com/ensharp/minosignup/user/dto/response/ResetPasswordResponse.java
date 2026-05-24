package com.ensharp.minosignup.user.dto.response;

public record ResetPasswordResponse(

        int status,

        String code,

        String message

) { }

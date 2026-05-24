package com.ensharp.minosignup.user.dto.response;

public record SignupResponse(

        int status,

        String code,

        String message

) { }

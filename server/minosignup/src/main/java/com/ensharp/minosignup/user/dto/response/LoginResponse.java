package com.ensharp.minosignup.user.dto.response;

public record LoginResponse(

        int status,

        String code,

        String message

) { }

package com.ensharp.minosignup.admin.dto.response;

public record DeleteUserResponse(

        int status,

        String code,

        String message

) { }

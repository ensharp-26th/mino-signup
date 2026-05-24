package com.ensharp.minosignup.user.dto.response;

public record EmailExistsResponse(

        int status,

        String code,

        String message

) { }
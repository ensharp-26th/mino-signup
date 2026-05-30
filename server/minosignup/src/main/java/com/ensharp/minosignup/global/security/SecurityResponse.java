package com.ensharp.minosignup.global.security;

public record SecurityResponse (

        int status,

        String code,

        String message

) { }

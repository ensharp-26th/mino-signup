package com.ensharp.minosignup.user.dto.response;

public record UserProfileResponse(

        String email,

        String username,

        String streetAddress,

        String detailAddress

) { }

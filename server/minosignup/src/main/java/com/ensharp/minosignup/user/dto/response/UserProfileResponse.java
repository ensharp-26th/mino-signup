package com.ensharp.minosignup.user.dto.response;

import com.ensharp.minosignup.user.entity.User;

public record UserProfileResponse(

        String email,

        String username,

        String streetAddress,

        String detailAddress

) {

    public static UserProfileResponse from(User user) {

        return new UserProfileResponse(
                user.email(),
                user.username(),
                user.streetAddress(),
                user.detailAddress()
        );

    }

}

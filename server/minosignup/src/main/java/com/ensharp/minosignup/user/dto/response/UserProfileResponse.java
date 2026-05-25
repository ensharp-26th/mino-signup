package com.ensharp.minosignup.user.dto.response;

import com.ensharp.minosignup.user.entity.User;
import io.swagger.v3.oas.annotations.media.Schema;

public record UserProfileResponse(

        @Schema(example = "k9425mino@ensharp.com")
        String email,

        @Schema(example = "김민오")
        String username,

        @Schema(example = "세종대학교 엔샵")
        String streetAddress,

        @Schema(example = "학생회관 530호")
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

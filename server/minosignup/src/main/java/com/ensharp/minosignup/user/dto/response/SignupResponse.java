package com.ensharp.minosignup.user.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;

public record SignupResponse(

        @Schema(example = "201")
        int status,

        @Schema(example = "SIGNUP")
        String code,

        @Schema(example = "(k9425mino@ensharp.com) 회원가입 하였습니다")
        String message

) { }

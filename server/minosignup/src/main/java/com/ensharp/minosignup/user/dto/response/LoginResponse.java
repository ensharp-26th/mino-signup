package com.ensharp.minosignup.user.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;

public record LoginResponse(

        @Schema(example = "200")
        int status,

        @Schema(example = "LOGIN")
        String code,

        @Schema(example = "(k9425mino@ensharp.com) 로그인 하였습니다")
        String message

) { }

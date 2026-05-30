package com.ensharp.minosignup.global.security;

import io.swagger.v3.oas.annotations.media.Schema;

public record SecurityResponse (

        @Schema(example = "200")
        int status,

        @Schema(example = "SESSION")
        String code,

        @Schema(example = "세션이 성공적으로 처리되었습니다.")
        String message

) { }

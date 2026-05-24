package com.ensharp.minosignup.admin.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;

public record ClearEmailVerificationResponse(

        @Schema(example = "200")
        int status,

        @Schema(example = "CLEAR_EMAIL_VERIFICATION")
        String code,

        @Schema(example = "이메일 인증 기록을 초기화하였습니다.")
        String message

) { }

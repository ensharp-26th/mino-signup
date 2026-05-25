package com.ensharp.minosignup.emailverification.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;

public record EmailVerifyResponse(

        @Schema(example = "200")
        int status,

        @Schema(example = "EMAIL_VERIFY")
        String code,

        @Schema(example = "(k9425mino@ensharp.com) 이메일 주소 인증에 성공하였습니다.")
        String message

) { }

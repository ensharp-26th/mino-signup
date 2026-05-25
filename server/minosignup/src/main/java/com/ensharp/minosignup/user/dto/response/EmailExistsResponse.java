package com.ensharp.minosignup.user.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;

public record EmailExistsResponse(

        @Schema(example = "200")
        int status,

        @Schema(example = "EMAIL_EXIST")
        String code,

        @Schema(example = "(k9425mino@ensharp.com) 이메일 주소 등록이 가능합니다")
        String message

) { }
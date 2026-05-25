package com.ensharp.minosignup.user.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;

public record ResetPasswordResponse(

        @Schema(example = "200")
        int status,

        @Schema(example = "RESET_PASSWORD")
        String code,

        @Schema(example = "(k9425mino@ensharp.com) 비밀번호 재설정에 성공하였습니다.")
        String message

) { }

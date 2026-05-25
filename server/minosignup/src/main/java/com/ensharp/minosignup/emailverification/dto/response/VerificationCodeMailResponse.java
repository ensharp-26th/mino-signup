package com.ensharp.minosignup.emailverification.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;

public record VerificationCodeMailResponse(

        @Schema(example = "201")
        int status,

        @Schema(example = "VERIFICATION_CODE_MAIL")
        String code,

        @Schema(example = "(k9425mino@ensharp.com) 인증번호 메일이 발송되었습니다.")
        String message

) { }

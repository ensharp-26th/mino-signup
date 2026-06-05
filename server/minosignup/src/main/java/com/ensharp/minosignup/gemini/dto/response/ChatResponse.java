package com.ensharp.minosignup.gemini.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDateTime;

public record ChatResponse(

        @Schema(example = "GEMINI")
        String sender,

        @Schema(example = "제가 회원님을 분석해봤을 때는 불가능합니다.")
        String content,

        LocalDateTime sendAt

) { }

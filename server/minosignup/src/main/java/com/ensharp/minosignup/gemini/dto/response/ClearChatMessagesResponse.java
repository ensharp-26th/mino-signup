package com.ensharp.minosignup.gemini.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;

public record ClearChatMessagesResponse(

        @Schema(example = "200")
        int status,

        @Schema(example = "CLEAR_CHAT_MESSAGES")
        String code,

        @Schema(example = "대화 내역을 초기화하였습니다.")
        String message

) { }

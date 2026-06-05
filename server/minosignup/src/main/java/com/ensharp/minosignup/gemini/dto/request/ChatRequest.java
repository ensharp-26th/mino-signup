package com.ensharp.minosignup.gemini.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;

public record ChatRequest(

        @Schema(example = "USER")
        String sender,

        @Schema(example = "모태솔로 탈출하는 법 알려줘.")
        String content

) { }

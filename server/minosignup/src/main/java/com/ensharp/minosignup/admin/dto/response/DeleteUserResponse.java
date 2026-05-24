package com.ensharp.minosignup.admin.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;

public record DeleteUserResponse(

        @Schema(example = "200")
        int status,

        @Schema(example = "DELETE_USER")
        String code,

        @Schema(example = "(k9425mino@ensharp.com) 등록된 유저 목록에서 제거하였습니다")
        String message

) { }

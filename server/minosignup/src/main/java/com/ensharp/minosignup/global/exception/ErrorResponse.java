package com.ensharp.minosignup.global.exception;

public record ErrorResponse(
        String code,
        String message
) {

    public static ErrorResponse of(ErrorCode errorCode) {

        return new ErrorResponse(errorCode.code(), errorCode.message());

    }

}
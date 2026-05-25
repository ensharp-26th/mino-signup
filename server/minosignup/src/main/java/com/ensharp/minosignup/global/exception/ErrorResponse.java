package com.ensharp.minosignup.global.exception;

public record ErrorResponse(

        int status,

        String code,

        String message

) {

    public static ErrorResponse of(ErrorCode errorCode) {

        return new ErrorResponse(
                errorCode.status().value(),
                errorCode.code(),
                errorCode.message()
        );

    }

}
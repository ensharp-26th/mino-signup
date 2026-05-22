package com.ensharp.minosignup.emailverification.exception;

import com.ensharp.minosignup.global.exception.ErrorCode;

public class EmailVerificationException extends RuntimeException {

    private final ErrorCode errorCode;

    public EmailVerificationException(
            ErrorCode errorCode
    ) {
        super(errorCode.message());
        this.errorCode = errorCode;
    }

    public ErrorCode errorCode() {
        return errorCode;
    }

}

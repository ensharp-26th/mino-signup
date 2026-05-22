package com.ensharp.minosignup.user.exception;

import com.ensharp.minosignup.global.exception.ErrorCode;

public class UserException extends RuntimeException {

    private final ErrorCode errorCode;

    public UserException(
            ErrorCode errorCode
    ) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }

    public ErrorCode getErrorCode() {
        return errorCode;
    }
}

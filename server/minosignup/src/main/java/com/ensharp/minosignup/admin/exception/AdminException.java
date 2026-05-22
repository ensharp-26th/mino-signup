package com.ensharp.minosignup.admin.exception;

import com.ensharp.minosignup.global.exception.ErrorCode;

public class AdminException extends RuntimeException {
    private final ErrorCode errorCode;

    public AdminException(
            ErrorCode errorCode
    ) {
        super(errorCode.message());
        this.errorCode = errorCode;
    }

    public ErrorCode errorCode() {
        return errorCode;
    }
}

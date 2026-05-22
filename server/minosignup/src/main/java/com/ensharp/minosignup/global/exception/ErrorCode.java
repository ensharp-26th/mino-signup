package com.ensharp.minosignup.global.exception;

import org.springframework.http.HttpStatus;

public enum ErrorCode {

    DUPLICATE_EMAIL(HttpStatus.BAD_REQUEST, "SIGNUP-001", "이미 사용 중인 이메일입니다.");

    private final HttpStatus status;
    private final String code;
    private final String message;

    ErrorCode(
            HttpStatus status,
            String code,
            String message
    ) {
        this.status = status;
        this.code = code;
        this.message = message;
    }

    public HttpStatus status() {
        return status;
    }
    public String code() {
        return code;
    }
    public String message() {
        return message;
    }

}

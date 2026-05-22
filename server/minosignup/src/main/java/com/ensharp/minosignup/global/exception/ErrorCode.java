package com.ensharp.minosignup.global.exception;

import org.springframework.http.HttpStatus;

public enum ErrorCode {

    NOT_REQUESTED_EMAIL(HttpStatus.BAD_REQUEST, "NOT_REQUESTED_EMAIL", "인증번호가 요청되지 않은 이메일 주소입니다"),
    INCONSISTENT_VERIFICATION_CODE(HttpStatus.UNAUTHORIZED, "INCONSISTENT_VERIFICATION_CODE", "인증번호가 일치하지 않습니다"),
    ALREADY_EXISTING_EMAIL(HttpStatus.BAD_REQUEST, "EMAIL-ALREADY-EXISTS", "이미 등록된 이메일 주소입니다"),
    NOT_EXISTING_EMAIL(HttpStatus.BAD_REQUEST, "EMAIL-NOT-EXISTS", "등록되지 않은 이메일 주소입니다"),
    INCONSISTENT_PASSWORD(HttpStatus.UNAUTHORIZED, "INCONSISTENT_PASSWORD", "비밀번호가 일치하지 않습니다");

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

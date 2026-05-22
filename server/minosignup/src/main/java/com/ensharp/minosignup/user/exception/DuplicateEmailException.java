package com.ensharp.minosignup.user.exception;

import com.ensharp.minosignup.global.exception.ErrorCode;

public class DuplicateEmailException extends RuntimeException {

    public DuplicateEmailException() {
        super(ErrorCode.DUPLICATE_EMAIL.getMessage());
    }

}

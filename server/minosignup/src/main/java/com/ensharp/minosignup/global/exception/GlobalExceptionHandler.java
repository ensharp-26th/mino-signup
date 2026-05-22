package com.ensharp.minosignup.global.exception;

import com.ensharp.minosignup.user.exception.DuplicateEmailException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(DuplicateEmailException.class)
    public ResponseEntity<ErrorResponse> handleDuplicationEmailException(DuplicateEmailException e) {

        ErrorCode errorCode = ErrorCode.DUPLICATE_EMAIL;

        ErrorResponse response = ErrorResponse.of(errorCode);

        return ResponseEntity
                .status(errorCode.getStatus())
                .body(response);
    }

}

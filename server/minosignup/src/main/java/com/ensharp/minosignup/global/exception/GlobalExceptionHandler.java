package com.ensharp.minosignup.global.exception;

import com.ensharp.minosignup.user.exception.UserException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserException.class)
    public ResponseEntity<ErrorResponse> handleUserException(UserException e) {

        ErrorCode errorCode = e.errorCode();

        ErrorResponse response = ErrorResponse.of(errorCode);

        return ResponseEntity
                .status(errorCode.status())
                .body(response);
    }

}

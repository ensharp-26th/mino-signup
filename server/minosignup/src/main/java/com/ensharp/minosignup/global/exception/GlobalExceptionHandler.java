package com.ensharp.minosignup.global.exception;

import com.ensharp.minosignup.admin.exception.AdminException;
import com.ensharp.minosignup.emailverification.exception.EmailVerificationException;
import com.ensharp.minosignup.user.exception.UserException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {

        String message = e
                .getBindingResult()
                .getAllErrors()
                .get(0)
                .getDefaultMessage();

        ErrorResponse response = new ErrorResponse("VALIDATION-ERROR", message);

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(response);

    }

    @ExceptionHandler(EmailVerificationException.class)
    public ResponseEntity<ErrorResponse> handleEmailVerificationException(EmailVerificationException e) {

        ErrorCode errorCode = e.errorCode();

        ErrorResponse response = ErrorResponse.of(errorCode);

        return ResponseEntity
                .status(errorCode.status())
                .body(response);

    }


    @ExceptionHandler(UserException.class)
    public ResponseEntity<ErrorResponse> handleUserException(UserException e) {

        ErrorCode errorCode = e.errorCode();

        ErrorResponse response = ErrorResponse.of(errorCode);

        return ResponseEntity
                .status(errorCode.status())
                .body(response);

    }

    @ExceptionHandler(AdminException.class)
    public ResponseEntity<ErrorResponse> handleAdminException(AdminException e) {

        ErrorCode errorCode = e.errorCode();

        ErrorResponse response = ErrorResponse.of(errorCode);

        return ResponseEntity
                .status(errorCode.status())
                .body(response);

    }

}

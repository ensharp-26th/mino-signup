package com.ensharp.minosignup.emailverification.controller;

import com.ensharp.minosignup.emailverification.dto.request.VerificationCodeMailRequest;
import com.ensharp.minosignup.emailverification.service.EmailVerificationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping(value = "/api/v1/email-verification")
public class EmailVerificationController {

    private final EmailVerificationService emailVerificationService;

    public EmailVerificationController(
            EmailVerificationService emailVerificationService
    ) {
        this.emailVerificationService = emailVerificationService;
    }

    @PostMapping(value = "/send-verification-code-mail")
    public ResponseEntity<Map<String, String>> sendVerificationCodeMail(
            @Valid @RequestBody VerificationCodeMailRequest request
    ) {

        emailVerificationService.sendVerificationCodeMail(request);

        String message = "입력하신 이메일 주소(" + request.email() +")로 인증번호 메일이 발송되었습니다.";
        Map<String, String> response = Map.of("message", message);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);

    }
}

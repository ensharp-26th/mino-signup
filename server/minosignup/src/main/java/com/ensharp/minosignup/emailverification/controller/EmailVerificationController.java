package com.ensharp.minosignup.emailverification.controller;

import com.ensharp.minosignup.emailverification.dto.request.EmailVerifyRequest;
import com.ensharp.minosignup.emailverification.dto.request.VerificationCodeMailRequest;
import com.ensharp.minosignup.emailverification.dto.response.EmailVerifyResponse;
import com.ensharp.minosignup.emailverification.dto.response.VerificationCodeMailResponse;
import com.ensharp.minosignup.emailverification.service.EmailVerificationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "EMAIL-VERIFICATION", description = "이메일 인증 관련 API")
@RestController
@RequestMapping(value = "/api/v1/email-verification")
public class EmailVerificationController {

    private final EmailVerificationService emailVerificationService;

    public EmailVerificationController(
            EmailVerificationService emailVerificationService
    ) {
        this.emailVerificationService = emailVerificationService;
    }

    @Operation(
            summary = "인증번호 메일 전송",
            description = "입력받은 이메일로 인증번호 메일을 전송합니다."
    )
    @PostMapping(value = "/send-verification-code-mail")
    public ResponseEntity<VerificationCodeMailResponse> sendVerificationCodeMail(
            @Valid @RequestBody VerificationCodeMailRequest request
    ) {

        emailVerificationService.sendVerificationCodeMail(request);

        VerificationCodeMailResponse response = new VerificationCodeMailResponse(
                HttpStatus.OK.value(),
                "VERIFICATION_CODE_MAIL",
                "입력하신 이메일 주소(" + request.email() + ")로 인증번호 메일이 발송되었습니다."
        );

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);

    }

    @Operation(
            summary = "이메일 인증",
            description = "입력받은 인증번호가 요청된 인증번호화 일치하는지 검증합니다."
    )
    @PostMapping(value = "/verify-email")
    public ResponseEntity<EmailVerifyResponse> verifyEmail(
            @Valid @RequestBody EmailVerifyRequest request
    ) {

        emailVerificationService.verifyEmail(request);

        EmailVerifyResponse response = new EmailVerifyResponse(
                HttpStatus.OK.value(),
                "EMAIL_VERIFY",
                request.email() + " 이메일 주소 인증에 성공하였습니다."
        );

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);

    }
}

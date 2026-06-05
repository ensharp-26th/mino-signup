package com.ensharp.minosignup.user.controller;

import com.ensharp.minosignup.global.security.CustomUserDetails;
import com.ensharp.minosignup.user.dto.response.SessionResponse;
import com.ensharp.minosignup.user.dto.request.LoginRequest;
import com.ensharp.minosignup.user.service.SessionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@Tag(name = "SECURITY", description = "세션 인증 관련 API")
@RestController
@RequestMapping(value = "/api/v1/sessions")
public class SessionController {

    private final SessionService sessionService;

    public SessionController(
            SessionService sessionService
    ) {
        this.sessionService = sessionService;
    }

    @Operation(
            summary = "세션 로그인",
            description = "아이디와 비밀번호를 확인하여 세션을 부여합니다."
    )
    @PostMapping
    public ResponseEntity<SessionResponse> login(
            @Valid @RequestBody LoginRequest request,
            HttpServletRequest servletRequest
    ) {

        sessionService.login(request, servletRequest);

        SessionResponse response = new SessionResponse(
                HttpStatus.OK.value(),
                "LOGIN",
                "(" + request.email() + ") 세션이 발급되었습니다."
        );

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);

    }

    @Operation(
            summary = "현재 세션 삭제",
            description = "현재 부여된 세션을 삭제합니다."
    )
    @DeleteMapping(value = "/current")
    public ResponseEntity<SessionResponse> logout(
            HttpServletRequest servletRequest
    ) {

        sessionService.logout(servletRequest);

        SessionResponse response = new SessionResponse(
                HttpStatus.OK.value(),
                "LOGOUT",
                "로그인 세션이 삭제되었습니다."
        );

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);

    }

    @Operation(
            summary = "현재 세션 조회",
            description = "현재 사용 중인 세션을 확인합니다."
    )
    @GetMapping(value = "/current")
    public ResponseEntity<SessionResponse> checkStatus() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        SessionResponse unauthorizedResponse = new SessionResponse(
                HttpStatus.UNAUTHORIZED.value(), 
                "IS_NOT_LOGGEDIN",
                "로그인 세션이 발급되지 않은 상태입니다."
        );
        
        if (authentication == null || ("anonymousUser").equals(authentication.getPrincipal())) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(unauthorizedResponse);
        }

        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();

        SessionResponse okResponse = new SessionResponse(
                HttpStatus.OK.value(),
                "IS_LOGGEDIN",
                "(" + userDetails.getUsername() + ") 로그인 세션이 발급된 상태입니다."
        );

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(okResponse);

    }
}

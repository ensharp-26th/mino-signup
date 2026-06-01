package com.ensharp.minosignup.global.security;

import com.ensharp.minosignup.user.dto.request.LoginRequest;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.web.bind.annotation.*;

@Tag(name = "SECURITY", description = "세션 인증 관련 API")
@RestController
@RequestMapping(value = "/api/v1/sessions")
public class SecurityController {

    private final AuthenticationManager authenticationManager;

    public SecurityController(
            AuthenticationManager authenticationManager
    ) {
        this.authenticationManager = authenticationManager;
    }

    @Operation(
            summary = "세션 로그인",
            description = "아이디와 비밀번호를 확인하여 세션을 부여합니다."
    )
    @PostMapping
    public ResponseEntity<SecurityResponse> login(
            @RequestBody LoginRequest request,
            HttpServletRequest servletRequest
    ) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.email(), request.password())
        );

        SecurityContext context = SecurityContextHolder.createEmptyContext();
        context.setAuthentication(authentication);
        SecurityContextHolder.setContext(context);

        HttpSession session = servletRequest.getSession(true);
        session.setAttribute(HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY, context);

        SecurityResponse response = new SecurityResponse(
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
    public ResponseEntity<SecurityResponse> logout(
            HttpServletRequest servletRequest
    ) {

        HttpSession session = servletRequest.getSession(false);
        if (session != null) {
            session.invalidate();
        }

        SecurityContextHolder.clearContext();

        SecurityResponse response = new SecurityResponse(
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
    public ResponseEntity<SecurityResponse> checkStatus() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        SecurityResponse unauthorizedResponse = new SecurityResponse(
                HttpStatus.UNAUTHORIZED.value(), 
                "IS_NOT_LOGGEDIN",
                "로그인 세션이 발급되지 않은 상태입니다."
        );
        
        if (authentication == null || authentication.getPrincipal().equals("anonymousUser")) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(unauthorizedResponse);
        }

        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();

        SecurityResponse okResponse = new SecurityResponse(
                HttpStatus.OK.value(),
                "IS_LOGGEDIN",
                "로그인 세션이 발급된 상태입니다."
        );

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(okResponse);

    }
}

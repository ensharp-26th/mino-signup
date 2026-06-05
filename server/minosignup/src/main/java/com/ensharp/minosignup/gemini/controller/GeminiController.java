package com.ensharp.minosignup.gemini.controller;

import com.ensharp.minosignup.gemini.dto.request.ChatRequest;
import com.ensharp.minosignup.gemini.dto.response.ChatResponse;
import com.ensharp.minosignup.gemini.dto.response.ClearChatMessagesResponse;
import com.ensharp.minosignup.gemini.service.GeminiService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "GEMINI", description = "Gemini AI 관련 API")
@RestController
@RequestMapping(value = "/api/v1/gemini")
public class GeminiController {

    private final GeminiService geminiService;

    public GeminiController(
        GeminiService geminiService
    ) {
        this.geminiService = geminiService;
    }

    @Operation(
            summary = "Gemini AI와 채팅",
            description = "텍스트를 전달하여 Gemini AI와 채팅을 합니다."
    )
    @PostMapping("/chat")
    public ResponseEntity<ChatResponse> chat(
            @Valid @RequestBody ChatRequest request
    ) {

        ChatResponse response = geminiService.chat(request);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);

    }

    @Operation(
            summary = "Gemini AI와의 채팅 내역 초기화",
            description = "Gemini AI와의 채팅 내역을 초기화합니다."
    )
    @DeleteMapping("/chat")
    public ResponseEntity<ClearChatMessagesResponse> clearChatMessages(
    ) {

        geminiService.clearChatMessages();

        ClearChatMessagesResponse response = new ClearChatMessagesResponse(
                HttpStatus.OK.value(),
                "CLEAR_CHAT_MESSAGES",
                "대화 내역을 초기화하였습니다."
        );

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);

    }
}

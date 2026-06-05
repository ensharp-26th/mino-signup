package com.ensharp.minosignup.gemini.service;

import com.ensharp.minosignup.gemini.dto.request.ChatRequest;
import com.ensharp.minosignup.gemini.dto.response.ChatResponse;
import com.ensharp.minosignup.gemini.entity.ChatMessage;
import com.ensharp.minosignup.gemini.repository.ChatMessageRepository;
import com.ensharp.minosignup.global.exception.BusinessException;
import com.ensharp.minosignup.global.exception.ErrorCode;
import com.ensharp.minosignup.global.security.CustomUserDetails;
import com.ensharp.minosignup.user.entity.User;
import com.ensharp.minosignup.user.repository.UserRepository;
import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class GeminiService {

    private final ChatMessageRepository chatMessageRepository;

    private final UserRepository userRepository;

    private final Client client;

    public GeminiService(
            ChatMessageRepository chatRepository,
            UserRepository userRepository,
            Client client
    ) {
        this.chatMessageRepository = chatRepository;
        this.userRepository = userRepository;
        this.client = client;
    }

    @Transactional
    public ChatResponse chat(ChatRequest request) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();

        String email = userDetails.getUsername();

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new BusinessException(ErrorCode.NOT_EXISTING_EMAIL));

        ChatMessage userChat = new ChatMessage.Builder()
                .user(user)
                .sender(request.sender())
                .content(request.content())
                .sendAt(LocalDateTime.now())
                .build();

        chatMessageRepository.save(userChat);

        String fullPrompt =
                buildConversationPrompt(
                        email,
                        request.content()
                );

        GenerateContentResponse contentResponse =
                client.models.generateContent("gemini-3.1-flash-lite", fullPrompt, null);

        String content = contentResponse.text();

        ChatMessage geminiChat = new ChatMessage.Builder()
                .user(user)
                .sender("GEMINI")
                .content(content)
                .sendAt(LocalDateTime.now())
                .build();

        chatMessageRepository.save(geminiChat);

        ChatResponse response = new ChatResponse(
                "GEMINI",
                content,
                LocalDateTime.now()
        );

        return response;
    }

    private String buildConversationPrompt(
            String email,
            String currentPrompt
    ) {

        List<ChatMessage> histories =
                chatMessageRepository.findTop30ByUser_EmailOrderBySendAtAsc(email);

        StringBuilder prompt = new StringBuilder();

        prompt.append("""
                (이 내용은 대화에 등장하지 않도록 한다.)
                해당 AI는 세종대학교 En# 프로그래밍 동아리의 AI 어시스턴트이다.
                아래는 사용자와 AI의 대화 기록이다.
                이전 대화 내용을 기억하고 자연스럽게 이어서 답변하라.
                """);

        for (ChatMessage history : histories) {

            if (history.sender().equals("USER")) {
                prompt.append("사용자: ")
                        .append(history.content())
                        .append("\n");
            }
            else if (history.sender().equals("GEMINI")) {
                prompt.append("AI: ")
                        .append(history.content())
                        .append("\n");
            }

        }

        prompt.append("AI: ");

        return prompt.toString();

    }

    @Transactional
    public void clearChatMessages() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();

        String email = userDetails.getUsername();

        chatMessageRepository.deleteByUser_Email(email);

    }

}

package com.ensharp.minosignup.gemini.repository;

import com.ensharp.minosignup.gemini.entity.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {

    List<ChatMessage> findTop30ByUser_EmailOrderBySendAtAsc(String email);

    void deleteByUser_Email(String email);

}

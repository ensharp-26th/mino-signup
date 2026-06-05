package com.ensharp.minosignup.gemini.entity;

import com.ensharp.minosignup.user.entity.User;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "chat_messages")
public class ChatMessage {

    protected ChatMessage() { }

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "sender", nullable = false)
    private String sender;

    @Column(name = "content", nullable = false, columnDefinition = "TEXT")
    private String content;

    @Column(name = "send_at", nullable = false)
    private LocalDateTime sendAt;

    public ChatMessage(Builder builder) {

        this.user    = builder.user;
        this.sender  = builder.sender;
        this.content = builder.content;
        this.sendAt  = builder.sendAt;

    }

    public String sender() {
        return sender;
    }
    public String content() {
        return content;
    }

    public static class Builder {

        private User user;
        private String sender;
        private String content;
        private LocalDateTime sendAt;

        public Builder user(User user) {
            this.user = user;
            return this;
        }
        public Builder sender(String sender) {
            this.sender = sender;
            return this;
        }
        public Builder content(String content) {
            this.content = content;
            return this;
        }
        public Builder sendAt(LocalDateTime sendAt) {
            this.sendAt = sendAt;
            return this;
        }

        public ChatMessage build() {
            return new ChatMessage(this);
        }

    }
}

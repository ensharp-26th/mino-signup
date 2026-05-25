package com.ensharp.minosignup.emailverification.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "email_verifications")
public class EmailVerification {

    protected EmailVerification() { }

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "verification_code", nullable = false)
    private String verificationCode;

    @Column(name = "requested_at", nullable = false)
    private LocalDateTime requestedAt;

    @Column(name = "is_verified", nullable = false)
    private boolean isVerified;

    public EmailVerification(Builder builder) {

        this.email            = builder.email;
        this.verificationCode = builder.verificationCode;
        this.requestedAt      = builder.requestedAt;
        this.isVerified       = builder.isVerified;

    }

    public String email() {
        return email;
    }
    public String verificationCode() {
        return verificationCode;
    }
    public LocalDateTime requestedAt() {
        return requestedAt;
    }
    public boolean isVerified() {
        return isVerified;
    }

    public static class Builder {

        private String email;
        private String verificationCode;
        private LocalDateTime requestedAt;
        private boolean isVerified;

        public Builder email(String email) {
            this.email = email;
            return this;
        }
        public Builder verificationCode(String verificationCode) {
            this.verificationCode = verificationCode;
            return this;
        }
        public Builder requestedAt(LocalDateTime requestedAt) {
            this.requestedAt = requestedAt;
            return this;
        }
        public Builder isVerified(boolean isVerified) {
            this.isVerified = isVerified;
            return this;
        }

        public EmailVerification build() {
            return new EmailVerification(this);
        }

    }

    public void updateVerifiedState(boolean verifiedState) {
        this.isVerified = verifiedState;
    }

}

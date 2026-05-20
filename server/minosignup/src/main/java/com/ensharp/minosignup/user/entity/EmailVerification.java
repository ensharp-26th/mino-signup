package com.ensharp.minosignup.user.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "email-verification")
public class EmailVerification {

    @Id
    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String verificationCode;

    protected EmailVerification() {
    }

    public EmailVerification(
        String email,
        String verificationCode
    ) {
        this.email = email;
        this.verificationCode = verificationCode;
    }
}

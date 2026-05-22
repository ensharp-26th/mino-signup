package com.ensharp.minosignup.emailverification.repository;

import com.ensharp.minosignup.emailverification.entity.EmailVerification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailVerificationRepository extends JpaRepository<EmailVerification, Long> {
}

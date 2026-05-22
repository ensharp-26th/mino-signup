package com.ensharp.minosignup.emailverification.repository;

import com.ensharp.minosignup.emailverification.entity.EmailVerification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmailVerificationRepository extends JpaRepository<EmailVerification, Long> {

    Optional<EmailVerification> findFirstByEmailOrderByRequestedAtDesc(String email);

}

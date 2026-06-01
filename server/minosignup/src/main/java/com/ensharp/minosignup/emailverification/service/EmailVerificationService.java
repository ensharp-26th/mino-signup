package com.ensharp.minosignup.emailverification.service;

import com.ensharp.minosignup.emailverification.dto.request.EmailVerifyRequest;
import com.ensharp.minosignup.emailverification.dto.request.VerificationCodeMailRequest;
import com.ensharp.minosignup.emailverification.entity.EmailVerification;
import com.ensharp.minosignup.emailverification.repository.EmailVerificationRepository;
import com.ensharp.minosignup.global.exception.BusinessException;
import com.ensharp.minosignup.global.exception.ErrorCode;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import java.security.SecureRandom;
import java.time.LocalDateTime;

@Service
public class EmailVerificationService {

    private final EmailVerificationRepository emailVerificationRepository;

    private final SecureRandom secureRandom;
    private final JavaMailSender javaMailSender;
    private final TemplateEngine templateEngine;

    public EmailVerificationService(
            EmailVerificationRepository emailVerificationRepository,
            JavaMailSender javaMailSender,
            TemplateEngine templateEngine
    ) {
        this.emailVerificationRepository = emailVerificationRepository;

        this.secureRandom = new SecureRandom();
        this.javaMailSender = javaMailSender;
        this.templateEngine = templateEngine;
    }

    private String generateVerificationCode() {

        int verificationCode = secureRandom.nextInt(1000000);

        return String.format("%06d", verificationCode);

    }

    @Transactional
    public void sendVerificationCodeMail(VerificationCodeMailRequest request) {

        try {

            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, MimeMessageHelper.MULTIPART_MODE_RELATED, "UTF-8");

            String verificationCode = generateVerificationCode();
            LocalDateTime requestedAt = LocalDateTime.now();

            Context context = new Context();
            context.setVariable("verificationCode", verificationCode);
            context.setVariable("expiredAt", requestedAt.plusMinutes(2));

            String htmlContent = templateEngine.process("verification-mail", context);

            mimeMessageHelper.setTo(request.email());
            mimeMessageHelper.setSubject("[En#] 이메일 인증 번호: " + verificationCode);
            mimeMessageHelper.setText(htmlContent, true);

            ClassPathResource imageResource = new ClassPathResource("static/ensharp_sejong.png");

            mimeMessageHelper.addInline("ensharpLogo", imageResource);

            javaMailSender.send(mimeMessage);

            EmailVerification emailVerification = new EmailVerification.Builder()
                    .email(request.email())
                    .verificationCode(verificationCode)
                    .requestedAt(requestedAt)
                    .isVerified(false)
                    .build();

            emailVerificationRepository.save(emailVerification);

        } catch (MessagingException e) {

            throw new BusinessException(ErrorCode.FAILED_TO_SEND);

        }

    }

    @Transactional
    public void verifyEmail(EmailVerifyRequest request) {

        EmailVerification emailVerification = emailVerificationRepository.findFirstByEmailOrderByRequestedAtDesc(request.email())
                .orElseThrow(() -> new BusinessException(ErrorCode.NOT_REQUESTED_EMAIL));

        if (!request.verificationCode().equals(emailVerification.verificationCode())) {
            throw new BusinessException(ErrorCode.INCONSISTENT_VERIFICATION_CODE);
        }

        if (LocalDateTime.now().isAfter(emailVerification.requestedAt().plusMinutes(2))) {
            throw new BusinessException(ErrorCode.VERIFICATION_CODE_EXPIRED);
        }

        emailVerification.updateVerifiedState(true);

    }

}

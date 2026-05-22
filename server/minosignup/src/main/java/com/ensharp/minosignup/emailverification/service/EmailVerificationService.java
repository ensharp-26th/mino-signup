package com.ensharp.minosignup.emailverification.service;

import com.ensharp.minosignup.emailverification.dto.request.VerificationCodeMailRequest;
import com.ensharp.minosignup.emailverification.entity.EmailVerification;
import com.ensharp.minosignup.emailverification.repository.EmailVerificationRepository;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDateTime;

@Service
public class EmailVerificationService {

    private final EmailVerificationRepository emailVerificationRepository;
    private final SecureRandom secureRandom;
    private final JavaMailSender javaMailSender;

    public EmailVerificationService(
            EmailVerificationRepository emailVerificationRepository,
            JavaMailSender javaMailSender
    ) {
        this.emailVerificationRepository = emailVerificationRepository;
        this.secureRandom = new SecureRandom();
        this.javaMailSender = javaMailSender;
    }

    private String generateVerificationCode() {

        int verificationCode = secureRandom.nextInt(1000000);

        return String.format("%06d", verificationCode);

    }

    public void sendVerificationCodeMail(VerificationCodeMailRequest request) {

        try {

            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, MimeMessageHelper.MULTIPART_MODE_RELATED, "UTF-8");

            String verificationCode = generateVerificationCode();

            String htmlContent = """
                    <div>
                        <img 
                            src="https://i.namu.wiki/i/ZwEuCR_k9AKLHHPu9zAxt-mAIIvGi8esMXOmDNyAcQCzbUpLxBIzKul3xXU57MgINZYChPpoP14jf-NreeEFcQ.webp" 
                            style="width: 250px; height: 290px;"
                        >
                        <h2>이메일 인증 번호 안내</h2>
                        <p>세종대학교 En# 동아리에 오신 것을 환영합니다.</p>
                        <p>회원가입을 위해서는 이메일 인증이 필요합니다.</p>
                        <p>아래의 인증번호를 인증번호 입력란에 정확히 입력해주세요.</p>
                        <h1>%s</h1>
                    </div>
                    """.formatted(verificationCode);

            mimeMessageHelper.setTo(request.email());
            mimeMessageHelper.setSubject("[En# SignUp] 이메일 인증 번호: " + verificationCode);
            mimeMessageHelper.setText(htmlContent, true);

            javaMailSender.send(mimeMessage);

            EmailVerification emailVerification = new EmailVerification.Builder()
                    .email(request.email())
                    .verificationCode(verificationCode)
                    .requestedAt(LocalDateTime.now())
                    .isVerified(false)
                    .build();

            emailVerificationRepository.save(emailVerification);

        } catch (MessagingException e) {

            throw new RuntimeException("이메일 발송 중 오류가 발생했습니다", e);

        }

    }
}

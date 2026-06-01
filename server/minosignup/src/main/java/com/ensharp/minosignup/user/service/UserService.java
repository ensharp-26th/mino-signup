package com.ensharp.minosignup.user.service;

import com.ensharp.minosignup.emailverification.entity.EmailVerification;
import com.ensharp.minosignup.emailverification.repository.EmailVerificationRepository;
import com.ensharp.minosignup.global.exception.BusinessException;
import com.ensharp.minosignup.global.exception.ErrorCode;
import com.ensharp.minosignup.user.dto.request.*;
import com.ensharp.minosignup.user.dto.response.UserProfileResponse;
import com.ensharp.minosignup.user.entity.User;
import com.ensharp.minosignup.user.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    private final UserRepository userRepository;

    private final EmailVerificationRepository emailVerificationRepository;

    private final PasswordEncoder passwordEncoder;

    public UserService(
            UserRepository userRepository,
            EmailVerificationRepository emailVerificationRepository,
            PasswordEncoder passwordEncoder
    ) {
        this.userRepository = userRepository;
        this.emailVerificationRepository = emailVerificationRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void checkEmailExists(EmailExistsRequest request) {

        if (userRepository.existsByEmail(request.email())) {
            throw new BusinessException(ErrorCode.ALREADY_EXISTING_EMAIL);
        }

    }

    @Transactional
    public void signup(SignupRequest request) {

        if (userRepository.existsByEmail(request.email())) {
            throw new BusinessException(ErrorCode.ALREADY_EXISTING_EMAIL);
        }

        EmailVerification emailVerification = emailVerificationRepository.findFirstByEmailOrderByRequestedAtDesc(request.email())
                .orElseThrow(() -> new BusinessException(ErrorCode.NOT_VERIFIED_EMAIL));

        if (!emailVerification.isVerified()) {
            throw new BusinessException(ErrorCode.NOT_VERIFIED_EMAIL);
        }

        String encodedPassword = passwordEncoder.encode(request.password());

        String role = request.email().equals("admin@ensharp.com") ? "ROLE_ADMIN" : "ROLE_USER";

        User user = new User.Builder()
                .role(role)
                .email(request.email())
                .password(encodedPassword)
                .username(request.username())
                .streetAddress(request.streetAddress())
                .detailAddress(request.detailAddress())
                .build();

        userRepository.save(user);

    }

    public void login(LoginRequest request) {

        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new BusinessException(ErrorCode.NOT_EXISTING_EMAIL));

        String encodedPassword = passwordEncoder.encode(request.password());

        if (!encodedPassword.matches(user.password())) {
            throw new BusinessException(ErrorCode.INCONSISTENT_PASSWORD);
        }

    }

    @Transactional
    public void resetPassword(ResetPasswordRequest request) {

        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new BusinessException(ErrorCode.NOT_EXISTING_EMAIL));

        String encodedNewPassword = passwordEncoder.encode(request.newPassword());

        user.updatePassword(encodedNewPassword);

    }

    @Transactional(readOnly = true)
    public UserProfileResponse getUserProfile(UserProfileRequest request) {

        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new BusinessException(ErrorCode.NOT_EXISTING_EMAIL));

        return new UserProfileResponse(
                user.email(),
                user.username(),
                user.streetAddress(),
                user.detailAddress()
        );

    }

}

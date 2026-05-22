package com.ensharp.minosignup.user.service;

import com.ensharp.minosignup.global.exception.ErrorCode;
import com.ensharp.minosignup.user.dto.request.*;
import com.ensharp.minosignup.user.dto.response.UserProfileResponse;
import com.ensharp.minosignup.user.entity.User;
import com.ensharp.minosignup.user.exception.UserException;
import com.ensharp.minosignup.user.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(
            UserRepository userRepository
    ) {
        this.userRepository = userRepository;
    }

    public void checkEmailExists(EmailExistsRequest request) {

        if (userRepository.existsByEmail(request.email())) {
            throw new UserException(ErrorCode.EMAIL_ALREADY_EXISTS);
        }

    }

    private String encodePassword(String password) {

        try {
            MessageDigest messageDigest = MessageDigest.getInstance("SHA-256");
            messageDigest.update(password.getBytes(StandardCharsets.UTF_8));

            byte[] hashBytes = messageDigest.digest();

            StringBuilder stringBuilder = new StringBuilder();
            for (byte b : hashBytes) {
                stringBuilder.append(String.format("%02x", b));
            }

            return stringBuilder.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("SHA-256 암호화 알고리즘을 찾을 수 없습니다.");
        }

    }

    public void signup(SignupRequest request) {

        if (userRepository.existsByEmail(request.email())) {
            throw new UserException(ErrorCode.EMAIL_ALREADY_EXISTS);
        }

        String encodedPassword = encodePassword(request.password());

        User user = new User.Builder()
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
                .orElseThrow(() -> new UserException(ErrorCode.EMAIL_NOT_EXISTS));

        String encodedPassword = encodePassword(request.password());

        if (!encodedPassword.equals(user.password())) {
            throw new UserException(ErrorCode.INCONSISTENT_PASSWORD);
        }

    }

    public String getUsernameByLogin(LoginRequest request) {

        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new UserException(ErrorCode.EMAIL_NOT_EXISTS));

        return user.username();

    }

    @Transactional
    public void resetPassword(ResetPasswordRequest request) {

        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new UserException(ErrorCode.EMAIL_NOT_EXISTS));

        String encodedNewPassword = encodePassword(request.newPassword());

        user.updatePassword(encodedNewPassword);

    }

    public UserProfileResponse getUserProfile(UserProfileRequest request) {

        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new UserException(ErrorCode.EMAIL_NOT_EXISTS));


        return new UserProfileResponse(
                user.email(),
                user.username(),
                user.streetAddress(),
                user.detailAddress()
        );

    }

}

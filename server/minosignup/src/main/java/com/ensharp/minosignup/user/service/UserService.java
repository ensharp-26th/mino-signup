package com.ensharp.minosignup.user.service;

import com.ensharp.minosignup.global.exception.ErrorCode;
import com.ensharp.minosignup.user.dto.request.SignUpRequest;
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

    private String encryptPassword(String password) {

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
            throw new RuntimeException("암호화 알고리즘을 찾을 수 없음");
        }

    }

    @Transactional
    public void signUp(SignUpRequest request) {

        if (userRepository.existsByEmail(request.email())) {
            throw new UserException(ErrorCode.DUPLICATE_EMAIL);
        }

        String encryptedPassword = encryptPassword(request.password());

        User user = new User.Builder()
                .email(request.email())
                .password(encryptedPassword)
                .username(request.username())
                .streetAddress(request.streetAddress())
                .detailAddress(request.detailAddress())
                .build();

        userRepository.save(user);

    }
}

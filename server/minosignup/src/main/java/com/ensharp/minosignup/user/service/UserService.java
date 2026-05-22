package com.ensharp.minosignup.user.service;

import com.ensharp.minosignup.user.dto.request.SignUpRequest;
import com.ensharp.minosignup.user.entity.User;
import com.ensharp.minosignup.user.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(
            UserRepository userRepository
    ) {
        this.userRepository = userRepository;
    }

    @Transactional
    public void signUp(SignUpRequest request) {
        User user = new User.Builder()
                .email(request.email())
                .password(request.password())
                .username(request.username())
                .streetAddress(request.streetAddress())
                .detailAddress(request.detailAddress())
                .build();

        userRepository.save(user);
    }
}

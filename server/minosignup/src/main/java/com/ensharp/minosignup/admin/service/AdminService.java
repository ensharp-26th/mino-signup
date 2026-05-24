package com.ensharp.minosignup.admin.service;

import com.ensharp.minosignup.admin.dto.request.DeleteUserRequest;
import com.ensharp.minosignup.emailverification.repository.EmailVerificationRepository;
import com.ensharp.minosignup.global.exception.BusinessException;
import com.ensharp.minosignup.global.exception.ErrorCode;
import com.ensharp.minosignup.user.dto.response.UserProfileResponse;
import com.ensharp.minosignup.user.entity.User;
import com.ensharp.minosignup.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdminService {

    private final EmailVerificationRepository emailVerificationRepository;
    private final UserRepository userRepository;

    public AdminService(
            EmailVerificationRepository emailVerificationRepository,
            UserRepository userRepository
    ) {
        this.emailVerificationRepository = emailVerificationRepository;
        this.userRepository = userRepository;
    }

    public List<UserProfileResponse> getAllUserProfile() {

        List<UserProfileResponse> allUserProfileResponse = new ArrayList<>();

        for (User user : userRepository.findAll()) {

            allUserProfileResponse.add(UserProfileResponse.from(user));

        }

        return allUserProfileResponse;

    }

    public void deleteUser(DeleteUserRequest request) {

        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new BusinessException(ErrorCode.NOT_EXISTING_EMAIL));

        userRepository.delete(user);

    }

    public void clearEmailVerification() {

        emailVerificationRepository.deleteAll();

    }

}

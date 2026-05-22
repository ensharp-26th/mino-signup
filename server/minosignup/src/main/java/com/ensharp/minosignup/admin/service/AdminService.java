package com.ensharp.minosignup.admin.service;

import com.ensharp.minosignup.admin.dto.request.DeleteUserRequest;
import com.ensharp.minosignup.admin.exception.AdminException;
import com.ensharp.minosignup.global.exception.ErrorCode;
import com.ensharp.minosignup.user.dto.response.UserProfileResponse;
import com.ensharp.minosignup.user.entity.User;
import com.ensharp.minosignup.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdminService {

    private final UserRepository userRepository;

    public AdminService(
        UserRepository userRepository
    ) {
        this.userRepository = userRepository;
    }

    public List<UserProfileResponse> getAllUserProfile() {

        List<User> users = userRepository.findAll();

        if (users.isEmpty()) {
            throw new AdminException(ErrorCode.NO_USER);
        }

        List<UserProfileResponse> allUserProfileResponse = new ArrayList<>();

        for (User user : users) {
            allUserProfileResponse.add(UserProfileResponse.from(user));
        }

        return allUserProfileResponse;

    }

    public void deleteUser(DeleteUserRequest request) {

        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new AdminException(ErrorCode.NOT_EXISTING_EMAIL));

        userRepository.delete(user);

    }

}

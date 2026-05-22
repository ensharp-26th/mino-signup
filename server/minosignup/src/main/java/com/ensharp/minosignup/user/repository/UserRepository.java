package com.ensharp.minosignup.user.repository;

import com.ensharp.minosignup.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

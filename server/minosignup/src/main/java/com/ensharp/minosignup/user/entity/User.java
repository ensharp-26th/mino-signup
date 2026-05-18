package com.ensharp.minosignup.user.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String streetAddress;

    @Column
    private String detailAddress;

    protected User() {
    }

    public User(
        String email,
        String password,
        String username,
        String streetAddress,
        String detailAddress
    ) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.streetAddress = streetAddress;
        this.detailAddress = detailAddress;
    }

    public String getEmail() {
        return this.email;
    }

    public String getUsername() {
        return this.username;
    }

    public String getStreetAddress() {
        return this.streetAddress;
    }

    public String getDetailAddress() {
        return this.detailAddress;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

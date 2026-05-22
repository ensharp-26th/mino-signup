package com.ensharp.minosignup.user.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

    protected User() {}

    public User(Builder builder) {
        this.id            = builder.id;
        this.email         = builder.email;
        this.password      = builder.password;
        this.username      = builder.username;
        this.streetAddress = builder.streetAddress;
        this.detailAddress = builder.detailAddress;
    }

    public Long id() {
        return id;
    }
    public String email() {
        return email;
    }
    public String password() {
        return password;
    }
    public String username() {
        return username;
    }
    public String streetAddress() {
        return streetAddress;
    }
    public String detailAddress() {
        return detailAddress;
    }

    public static class Builder {
        private Long id;
        private String email;
        private String password;
        private String username;
        private String streetAddress;
        private String detailAddress;

        public Builder id(Long id) {
            this.id = id;
            return this;
        }
        public Builder email(String email) {
            this.email = email;
            return this;
        }
        public Builder password(String password) {
            this.password = password;
            return this;
        }
        public Builder username(String username) {
            this.username = username;
            return this;
        }
        public Builder streetAddress(String streetAddress) {
            this.streetAddress = streetAddress;
            return this;
        }
        public Builder detailAddress(String detailAddress) {
            this.detailAddress = detailAddress;
            return this;
        }
        public User build() {
            return new User(this);
        }
    }

    public void updatePassword(String newPassword) {
        this.password = newPassword;
    }

}

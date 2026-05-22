package com.ensharp.minosignup.user.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    protected User() {}

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "street_address", nullable = false)
    private String streetAddress;

    @Column(name = "detail_address", nullable = true)
    private String detailAddress;

    public User(Builder builder) {

        this.email         = builder.email;
        this.password      = builder.password;
        this.username      = builder.username;
        this.streetAddress = builder.streetAddress;
        this.detailAddress = builder.detailAddress;

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

        private String email;
        private String password;
        private String username;
        private String streetAddress;
        private String detailAddress;

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

package com.ensharp.minosignup.user.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    public Long getId() {
        return id;
    }
    public String getEmail() {
        return email;
    }
    public String getPassword() {
        return password;
    }
    public String getUsername() {
        return username;
    }
    public String getStreetAddress() {
        return streetAddress;
    }
    public String getDetailAddress() {
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

}

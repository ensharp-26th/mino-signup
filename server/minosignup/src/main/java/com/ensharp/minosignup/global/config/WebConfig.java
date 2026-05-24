package com.ensharp.minosignup.global.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(final CorsRegistry corsRegistry) {

        String clientURL = System.getenv("CLIENT_URL");

        corsRegistry.addMapping("/api/**")
                .allowedOrigins(clientURL)
                .allowedMethods("POST", "PATCH", "GET");

    }
}

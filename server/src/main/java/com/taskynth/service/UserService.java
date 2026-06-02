package com.taskynth.service;

import com.taskynth.dto.UserProfileRequest;
import com.taskynth.entity.User;
import com.taskynth.repository.UserRepository;
import com.taskynth.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public User getCurrentUser(String authHeader) {

        String token = authHeader.replace("Bearer ", "");

        String email = jwtUtil.extractEmail(token);

        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public User updateCurrentUser(
            String authHeader,
            UserProfileRequest request
    ) {

        String token = authHeader.replace("Bearer ", "");

        String email = jwtUtil.extractEmail(token);

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setName(request.getName());
        user.setBio(request.getBio());

        return userRepository.save(user);
    }
}
package com.taskynth.service;

import com.taskynth.dto.UserProfileRequest;
import com.taskynth.entity.User;
import com.taskynth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public User getUserByPrincipal(String principalName) {
        try {
            Long id = Long.parseLong(principalName);
            return userRepository.findById(id)
                    .orElseGet(() -> getUserByEmail(principalName));
        } catch (NumberFormatException e) {
            return getUserByEmail(principalName);
        }
    }

    public User updateProfile(String principalName, UserProfileRequest request) {
        User user = getUserByPrincipal(principalName);
        
        user.setName(request.getName());
        // Intentionally NOT updating the email here to prevent JWT desync issues
        // user.setEmail(request.getEmail());
        user.setBio(request.getBio());
        
        return userRepository.save(user);
    }
}
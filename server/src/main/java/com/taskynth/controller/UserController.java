package com.taskynth.controller;

import com.taskynth.dto.UserProfileRequest;
import com.taskynth.entity.User;
import com.taskynth.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    @GetMapping("/me")
    public ResponseEntity<User> getCurrentUser(Principal principal) {
        if (principal == null) {
            throw new RuntimeException("Unauthorized: No principal found. Ensure your client sends the JWT token.");
        }
        return ResponseEntity.ok(userService.getUserByPrincipal(principal.getName()));
    }

    @PutMapping("/me")
    public ResponseEntity<User> updateCurrentUser(
            Principal principal,
            @RequestBody UserProfileRequest request
    ) {
        if (principal == null) {
            throw new RuntimeException("Unauthorized: No principal found.");
        }
        return ResponseEntity.ok(userService.updateProfile(principal.getName(), request));
    }
}
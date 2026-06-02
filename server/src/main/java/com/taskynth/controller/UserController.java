package com.taskynth.controller;

import com.taskynth.dto.UserProfileRequest;
import com.taskynth.entity.User;
import com.taskynth.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    @GetMapping("/me")
    public ResponseEntity<User> getCurrentUser(
            @RequestHeader("Authorization") String authHeader
    ) {

        return ResponseEntity.ok(
                userService.getCurrentUser(authHeader)
        );
    }

    @PutMapping("/me")
    public ResponseEntity<User> updateCurrentUser(
            @RequestHeader("Authorization") String authHeader,
            @RequestBody UserProfileRequest request
    ) {

        return ResponseEntity.ok(
                userService.updateCurrentUser(authHeader, request)
        );
    }
}
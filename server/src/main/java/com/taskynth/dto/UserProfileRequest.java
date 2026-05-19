package com.taskynth.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserProfileRequest {

    private String name;
    private String email;
    private String bio;
}
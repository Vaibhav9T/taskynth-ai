package com.taskynth.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProjectRequest {

    private String title;

    private String description;

    private Long createdById;

    private List<Long> memberIds;
}
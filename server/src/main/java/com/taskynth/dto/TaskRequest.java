package com.taskynth.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TaskRequest {

    private String title;

    private String description;

    private String dueDate;

    private String priority;

    private String status;

    private Long assignedUserId;

    private Long projectId;
}
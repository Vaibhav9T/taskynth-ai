package com.taskynth.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DashboardResponse {

    private long totalTasks;

    private long todoTasks;

    private long inProgressTasks;

    private long doneTasks;

    private long overdueTasks;
}
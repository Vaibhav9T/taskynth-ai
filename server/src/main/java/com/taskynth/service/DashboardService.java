package com.taskynth.service;

import com.taskynth.dto.DashboardResponse;
import com.taskynth.entity.TaskStatus;
import com.taskynth.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final TaskRepository taskRepository;

    public DashboardResponse getDashboardStats() {

        long totalTasks = taskRepository.count();

        long todoTasks =
                taskRepository.countByStatus(TaskStatus.TODO);

        long inProgressTasks =
                taskRepository.countByStatus(TaskStatus.IN_PROGRESS);

        long doneTasks =
                taskRepository.countByStatus(TaskStatus.DONE);

        long overdueTasks =
                taskRepository.countByDueDateBeforeAndStatusNot(
                        LocalDate.now(),
                        TaskStatus.DONE
                );

        return DashboardResponse.builder()
                .totalTasks(totalTasks)
                .todoTasks(todoTasks)
                .inProgressTasks(inProgressTasks)
                .doneTasks(doneTasks)
                .overdueTasks(overdueTasks)
                .build();
    }
}
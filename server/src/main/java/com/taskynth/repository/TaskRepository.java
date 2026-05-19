package com.taskynth.repository;

import com.taskynth.entity.Task;
import com.taskynth.entity.TaskStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;

public interface TaskRepository extends JpaRepository<Task, Long> {

    long countByStatus(TaskStatus status);

    long countByDueDateBeforeAndStatusNot(
            LocalDate date,
            TaskStatus status
    );
}
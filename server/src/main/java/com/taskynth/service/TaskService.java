package com.taskynth.service;

import com.taskynth.dto.TaskRequest;
import com.taskynth.entity.*;
import com.taskynth.repository.ProjectRepository;
import com.taskynth.repository.TaskRepository;
import com.taskynth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;

    private User getUserByPrincipal(String principalName) {
        try {
            Long id = Long.parseLong(principalName);
            return userRepository.findById(id)
                    .orElseGet(() -> userRepository.findByEmail(principalName)
                            .orElseThrow(() -> new RuntimeException("User not found")));
        } catch (NumberFormatException e) {
            return userRepository.findByEmail(principalName)
                    .orElseThrow(() -> new RuntimeException("User not found"));
        }
    }

    public Task createTask(TaskRequest request, String principalName) {

        User assignedUser = getUserByPrincipal(principalName);

        Project project = null;
        if (request.getProjectId() != null) {
            project = projectRepository.findById(request.getProjectId()).orElse(null);
        }

        LocalDate date = LocalDate.now();
        if (request.getDueDate() != null && !request.getDueDate().isEmpty()) {
            date = LocalDate.parse(request.getDueDate());
        }

        Task task = Task.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .dueDate(date)
                .priority(TaskPriority.valueOf(request.getPriority()))
                .status(TaskStatus.valueOf(request.getStatus()))
                .assignedUser(assignedUser)
                .project(project)
                .build();

        return taskRepository.save(task);
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task getTaskById(Long id) {

        return taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));
    }

    public Task updateTask(Long id, TaskRequest request) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        Project project = null;
        if (request.getProjectId() != null) {
            project = projectRepository.findById(request.getProjectId()).orElse(null);
        }

        LocalDate date = task.getDueDate();
        if (request.getDueDate() != null && !request.getDueDate().isEmpty()) {
            date = LocalDate.parse(request.getDueDate());
        }

        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        task.setDueDate(date);
        task.setPriority(TaskPriority.valueOf(request.getPriority()));
        task.setStatus(TaskStatus.valueOf(request.getStatus()));
        task.setProject(project);

        return taskRepository.save(task);
    }

    public Task updateTaskStatus(Long id, String status) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        task.setStatus(TaskStatus.valueOf(status));

        return taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}
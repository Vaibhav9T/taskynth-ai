package com.taskynth.controller;

import com.taskynth.dto.TaskRequest;
import com.taskynth.entity.Task;
import com.taskynth.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    public ResponseEntity<Task> createTask(
            @RequestBody TaskRequest request,
            Principal principal
    ) {

        if (principal == null) {
            throw new RuntimeException("Unauthorized: No principal found. Ensure your client sends the JWT token.");
        }

        return ResponseEntity.ok(
                taskService.createTask(request, principal.getName())
        );
    }

    @GetMapping
    public ResponseEntity<List<Task>> getAllTasks() {

        return ResponseEntity.ok(
                taskService.getAllTasks()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(
            @PathVariable Long id
    ) {

        return ResponseEntity.ok(
                taskService.getTaskById(id)
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(
            @PathVariable Long id,
            @RequestBody TaskRequest request
    ) {
        return ResponseEntity.ok(
                taskService.updateTask(id, request)
        );
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Task> updateTaskStatus(
            @PathVariable Long id,
            @RequestParam String status
    ) {

        return ResponseEntity.ok(
                taskService.updateTaskStatus(id, status)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTask(
            @PathVariable Long id
    ) {

        taskService.deleteTask(id);

        return ResponseEntity.ok("Task deleted successfully");
    }
}
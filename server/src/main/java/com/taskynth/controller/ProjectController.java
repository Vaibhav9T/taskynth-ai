package com.taskynth.controller;

import com.taskynth.dto.ProjectRequest;
import com.taskynth.entity.Project;
import com.taskynth.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ProjectController {

    private final ProjectService projectService;

    @PostMapping
    public ResponseEntity<Project> createProject(
            @RequestBody ProjectRequest request,
            Principal principal
    ) {

        if (principal == null) {
            throw new RuntimeException("Unauthorized: No principal found. Ensure your client sends the JWT token.");
        }

        return ResponseEntity.ok(
                projectService.createProject(request, principal.getName())
        );
    }

    @GetMapping
    public ResponseEntity<List<Project>> getAllProjects() {

        return ResponseEntity.ok(
                projectService.getAllProjects()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectById(
            @PathVariable Long id
    ) {

        return ResponseEntity.ok(
                projectService.getProjectById(id)
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Project> updateProject(
            @PathVariable Long id,
            @RequestBody ProjectRequest request
    ) {
        return ResponseEntity.ok(
                projectService.updateProject(id, request)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProject(
            @PathVariable Long id
    ) {

        projectService.deleteProject(id);

        return ResponseEntity.ok("Project deleted successfully");
    }
}
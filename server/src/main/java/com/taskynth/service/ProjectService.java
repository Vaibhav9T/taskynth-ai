package com.taskynth.service;

import com.taskynth.dto.ProjectRequest;
import com.taskynth.entity.Project;
import com.taskynth.entity.User;
import com.taskynth.repository.ProjectRepository;
import com.taskynth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

    public Project createProject(ProjectRequest request) {

        User creator = userRepository.findById(request.getCreatedById())
                .orElseThrow(() -> new RuntimeException("Creator not found"));

        List<User> members = userRepository.findAllById(request.getMemberIds());

        Project project = Project.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .createdBy(creator)
                .members(members)
                .build();

        return projectRepository.save(project);
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project getProjectById(Long id) {

        return projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found"));
    }

    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
}
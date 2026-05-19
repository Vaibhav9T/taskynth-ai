package com.taskynth.service;

import com.taskynth.dto.ProjectRequest;
import com.taskynth.entity.Project;
import com.taskynth.entity.User;
import com.taskynth.repository.ProjectRepository;
import com.taskynth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

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

     public Project createProject(ProjectRequest request, String principalName) {

        User creator = getUserByPrincipal(principalName);

        List<User> members = new ArrayList<>();
        members.add(creator);

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

    public Project updateProject(Long id, ProjectRequest request) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found"));

        project.setTitle(request.getTitle());
        project.setDescription(request.getDescription());

        return projectRepository.save(project);
    }

    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
}
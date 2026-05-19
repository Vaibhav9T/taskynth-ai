# Taskynth

AI-Powered Full-Stack Team Task Management Platform

Taskynth is a modern full-stack task and project management platform built for collaborative team workflows. The application enables users to create projects, assign tasks, manage teams, and track task progress with secure role-based authentication.

The platform is developed using React.js, Spring Boot, MySQL, and JWT Authentication with a scalable REST API architecture.

---

# Live Demo

## Frontend
```bash
https://your-frontend-url.up.railway.app
```

## Backend API
```bash
https://your-backend-url.up.railway.app
```

---

# Demo Video

```bash
https://your-demo-video-link
```

---

# Features

## Authentication & Authorization
- User Signup & Login
- JWT Authentication
- Password Encryption using BCrypt
- Protected APIs
- Role-Based Access Control

---

## Role-Based Access

### Admin
- Create Projects
- Add Team Members
- Create Tasks
- Assign Tasks
- Delete Tasks
- Monitor Team Progress

### Member
- View Assigned Projects
- View Assigned Tasks
- Update Task Status

---

## Project Management
- Create Projects
- Manage Team Members
- View Assigned Projects
- Project Tracking

---

## Task Management
- Create Tasks
- Assign Tasks to Members
- Task Priorities
- Due Dates
- Task Status Updates
- Overdue Task Tracking

---

## Dashboard Analytics
- Total Tasks
- Tasks by Status
- Overdue Tasks
- Tasks per User
- Active Projects

---

## Modern UI
- Responsive Design
- Clean Dashboard Layout
- Reusable Components
- Optimized User Experience

---

# Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

---

## Backend
- Java Spring Boot
- Spring Security
- Spring Data JPA
- JWT Authentication
- Maven

---

## Database
- MySQL

---

## Deployment
- Railway

---

# System Architecture

```text
React Frontend
       ↓
REST APIs (Spring Boot)
       ↓
Spring Security + JWT
       ↓
MySQL Database
```

---

# Project Structure

## Frontend

```bash
client/
 ├── src/
 │   ├── api/
 │   ├── components/
 │   ├── context/
 │   ├── layouts/
 │   ├── pages/
 │   ├── routes/
 │   ├── utils/
 │   ├── App.jsx
 │   └── main.jsx
```

---

## Backend

```bash
server/
 ├── src/main/java/com/taskynth/
 │
 ├── config/
 ├── controller/
 ├── dto/
 ├── entity/
 ├── repository/
 ├── security/
 ├── service/
 │
 ├── TaskynthApplication.java
 │
 └── src/main/resources/
     └── application.properties
```

---

# Database Schema

## User
- id
- name
- email
- password
- role

---

## Project
- id
- title
- description
- createdBy
- members

---

## Task
- id
- title
- description
- priority
- status
- dueDate
- assignedUser
- project

---

# REST API Endpoints

# Authentication APIs

```http
POST /api/auth/register
POST /api/auth/login
```

---

# Project APIs

```http
POST /api/projects
GET /api/projects
GET /api/projects/{id}
DELETE /api/projects/{id}
```

---

# Task APIs

```http
POST /api/tasks
GET /api/tasks
PUT /api/tasks/{id}
DELETE /api/tasks/{id}
```

---

# Dashboard APIs

```http
GET /api/dashboard/stats
```

---

# Installation & Setup

# Clone Repository

```bash
git clone https://github.com/your-username/taskynth-ai.git
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:
```bash
http://localhost:5173
```

---

# Backend Setup

```bash
cd server
```

Run backend:

### Windows
```bash
.\mvnw.cmd spring-boot:run
```

### Mac/Linux
```bash
./mvnw spring-boot:run
```

Backend runs on:
```bash
http://localhost:8080
```

---

# MySQL Database Setup

## Create Database

```sql
CREATE DATABASE taskynth;
```

---

# Backend Configuration

## application.properties

```properties
spring.application.name=taskynth

spring.datasource.url=jdbc:mysql://localhost:3306/taskynth
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

server.port=8080

jwt.secret=taskynthsecretkeytaskynthsecretkey
```

---

# Railway Deployment

# Backend Deployment

1. Push backend code to GitHub
2. Create Railway Project
3. Connect GitHub Repository
4. Add Environment Variables
5. Deploy Backend

---

# Frontend Deployment

1. Create New Railway Service
2. Connect Frontend Repository
3. Add Frontend Environment Variables
4. Deploy React Application

---

# Environment Variables

## Backend

```env
SPRING_DATASOURCE_URL=
SPRING_DATASOURCE_USERNAME=
SPRING_DATASOURCE_PASSWORD=
JWT_SECRET=
```

---

## Frontend

```env
VITE_API_URL=
```

---

# API Testing

Use Postman for API testing.

## Register User

```http
POST http://localhost:8080/api/auth/register
```

Body:

```json
{
  "name":"Vaibhav",
  "email":"test@gmail.com",
  "password":"123456"
}
```

---

## Login User

```http
POST http://localhost:8080/api/auth/login
```

---

# Future Improvements

- Drag-and-Drop Kanban Board
- Real-Time Notifications
- AI Task Suggestions
- Team Chat System
- Activity Logs
- Email Notifications
- Dark Mode
- Advanced Analytics

---

# Learning Outcomes

This project helped in understanding:

- Full-Stack Application Development
- Spring Boot REST APIs
- JWT Authentication
- Spring Security
- Database Relationships
- JPA & Hibernate
- MySQL Integration
- Frontend-Backend Communication
- Railway Deployment
- Role-Based Access Control
- Scalable Backend Architecture

---

# Screenshots

## Login Page
(Add Screenshot)

## Dashboard
(Add Screenshot)

## Projects Page
(Add Screenshot)

## Task Management
(Add Screenshot)

---

# Author

## Vaibhav Annaso Tembukade

LinkedIn:
```bash
https://www.linkedin.com/in/vaibhav9t
```

GitHub:
```bash
https://github.com/Vaibhav9T
```

---

# License

This project is developed for educational and assessment purposes.

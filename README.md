# Taskynth

AI-Powered Full-Stack Team Task Management Platform

Taskynth is a modern full-stack web application designed for project collaboration, task assignment, workflow tracking, and team productivity management. The platform supports role-based access control, authentication, dashboard analytics, and scalable task management workflows.

---

# Live Demo

Frontend:
```bash
https://your-frontend-url.up.railway.app
```

Backend API:
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

## Authentication & Security
- User Signup & Login
- JWT Authentication
- Protected Routes
- Password Hashing using bcryptjs
- Secure API Access

## Role-Based Access Control
### Admin
- Create Projects
- Add Team Members
- Assign Tasks
- Update/Delete Tasks
- Monitor Team Progress

### Member
- View Assigned Tasks
- Update Task Status
- Track Project Progress

## Project Management
- Create and Manage Projects
- Team Collaboration
- Project Progress Tracking
- Member Assignment

## Task Management
- Create Tasks
- Assign Tasks to Team Members
- Task Priorities
- Due Dates
- Task Status Updates
- Overdue Task Tracking

## Dashboard Analytics
- Total Tasks
- Pending Tasks
- Completed Tasks
- Overdue Tasks
- Active Projects

## Modern UI/UX
- Fully Responsive Design
- Clean Dashboard Interface
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

## Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs

## Database
- MongoDB Atlas
- Mongoose

## Deployment
- Railway

---

# System Architecture

```text
Frontend (React.js)
       ↓
REST APIs (Express.js)
       ↓
Authentication Middleware (JWT)
       ↓
MongoDB Database
```

---

# Folder Structure

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

## Backend

```bash
server/
 ├── config/
 ├── controllers/
 ├── middleware/
 ├── models/
 ├── routes/
 ├── utils/
 ├── server.js
 └── .env
```

---

# Database Models

## User Model
- Name
- Email
- Password
- Role (Admin / Member)

## Project Model
- Title
- Description
- Members
- Created By

## Task Model
- Title
- Description
- Priority
- Status
- Due Date
- Assigned User
- Related Project

---

# API Endpoints

## Authentication APIs

```bash
POST /api/auth/register
POST /api/auth/login
```

## Project APIs

```bash
POST /api/projects
GET /api/projects
GET /api/projects/:id
PUT /api/projects/:id
DELETE /api/projects/:id
```

## Task APIs

```bash
POST /api/tasks
GET /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id
```

## Dashboard APIs

```bash
GET /api/dashboard/stats
```

---

# Installation & Setup

## Clone Repository

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

---

# Backend Setup

```bash
cd server
npm install
npm run dev
```

---

# Environment Variables

## Backend (.env)

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

---

# Frontend (.env)

```env
VITE_API_URL=http://localhost:5000
```

---

# Railway Deployment

## Backend Deployment
1. Push backend code to GitHub
2. Create Railway Project
3. Connect GitHub Repository
4. Add Environment Variables
5. Deploy Backend

## Frontend Deployment
1. Create New Railway Service
2. Deploy Frontend
3. Add Frontend Environment Variable
4. Set Build Command:

```bash
npm run build
```

5. Set Output Directory:

```bash
dist
```

---

# Future Improvements

- Real-Time Notifications
- Drag-and-Drop Kanban Board
- AI Task Suggestions
- Team Chat System
- Activity Logs
- Email Notifications
- Dark Mode
- Advanced Analytics

---

# Screenshots

## Login Page
(Add Screenshot)

## Dashboard
(Add Screenshot)

## Project Management
(Add Screenshot)

## Task Board
(Add Screenshot)

---

# Learning Outcomes

This project helped in understanding:
- Full-Stack Application Development
- REST API Architecture
- JWT Authentication
- Role-Based Access Control
- Database Relationships
- MongoDB Schema Design
- Frontend-Backend Integration
- Railway Deployment Workflow
- Scalable Software Architecture

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

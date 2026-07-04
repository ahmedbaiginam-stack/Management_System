<div align="center">

# 📚 Digital Library Management System

### A Modern Full-Stack Library Management Platform built using Spring Boot, React.js & MongoDB

<p align="center">

<img src="https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=openjdk"/>
<img src="https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot"/>
<img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react"/>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb"/>
<img src="https://img.shields.io/badge/Spring_Security-JWT-success?style=for-the-badge&logo=springsecurity"/>
<img src="https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap"/>

</p>

<p align="center">

A secure, scalable and responsive Digital Library Management System developed using
<strong>Spring Boot</strong>, <strong>React.js</strong>, <strong>MongoDB</strong>,
<strong>Spring Security</strong>, and <strong>JWT Authentication</strong>.

</p>

</div>

---

# 📖 Table of Contents

- Overview
- Features
- Technology Stack
- Architecture
- Application Workflow
- Project Structure
- Database Design
- REST APIs
- Installation Guide
- Screenshots
- Future Enhancements
- Developer
- License

---

# 📖 Project Overview

The **Digital Library Management System** is a modern web application designed to simplify library operations through a secure, responsive, and user-friendly interface.

The system enables users to browse digital resources, borrow books, read articles, explore story books, participate in discussions, and monitor borrowing history.

Administrators have complete control over the library through an advanced dashboard that provides management capabilities for books, users, articles, news, questions, and borrowing records.

The application follows a **RESTful Client–Server Architecture**, where the React frontend communicates with the Spring Boot backend using secured REST APIs protected by **JWT Authentication**.

---

# 🎯 Project Objectives

The primary objectives of this project are:

- Digitize library operations
- Reduce manual management
- Secure user authentication
- Improve accessibility
- Maintain borrowing history
- Automatically calculate overdue fines
- Provide role-based access control
- Deliver a responsive modern UI

---

# ✨ Key Features

## 👤 User Module

- Secure Registration
- Secure Login using JWT
- Browse Library Books
- Search Books
- Read Books Online
- Read Articles
- Read Story Books
- View Library News
- Borrow Books
- Borrow Articles
- Borrow Story Books
- View Borrow History
- Due Date Tracking
- Automatic Fine Notification
- Question & Answer Forum
- Responsive Dashboard

---

## 👨‍💼 Administrator Module

- Secure Admin Login
- Dashboard Analytics
- Manage Books
- Manage Users
- Manage Articles
- Manage Story Books
- Manage News
- Manage Questions
- Manage Borrow Records
- CRUD Operations
- Library Monitoring

---

# 🚀 Major Functionalities

### Authentication

- User Registration
- Login
- JWT Authentication
- Role-Based Authorization
- Secure API Access

---

### Library

- Browse Books
- Search Books
- Read Books
- Story Books
- Digital Articles
- Latest News

---

### Borrow Management

- Borrow Books
- Borrow Articles
- Borrow Story Books
- Borrow History
- Return Items
- Automatic Fine Calculation

---

### Discussion Forum

- Ask Questions
- Reply to Questions
- Threaded Discussions

---

### Administration

- Book Management
- User Management
- Article Management
- News Management
- Question Management
- Borrow Record Management

---

# 🛠 Technology Stack

| Category | Technology |
|-----------|------------|
| Programming Language | Java 17 |
| Backend Framework | Spring Boot 3 |
| Security | Spring Security |
| Authentication | JWT |
| Database | MongoDB |
| Frontend | React.js |
| Build Tool | Vite |
| Routing | React Router DOM |
| HTTP Client | Axios |
| Styling | Bootstrap 5 + CSS3 |
| Dependency Management | Maven |
| Version Control | Git |
| IDE | IntelliJ IDEA / VS Code |

---

# 🏗 System Architecture

```text
                    +---------------------------+
                    |       React Frontend      |
                    | React + Bootstrap + CSS   |
                    +-------------+-------------+
                                  │
                                  │ Axios
                                  ▼
                    +---------------------------+
                    |    Spring Boot REST API   |
                    +-------------+-------------+
                                  │
                   Spring Security + JWT Filter
                                  │
                                  ▼
                    +---------------------------+
                    |     Service Layer         |
                    | Business Logic & Rules    |
                    +-------------+-------------+
                                  │
                                  ▼
                    +---------------------------+
                    | Spring Data MongoDB       |
                    +-------------+-------------+
                                  │
                                  ▼
                           MongoDB Database
```

---

# 📊 Project Statistics

| Module | Status |
|---------|--------|
| Authentication | ✅ Completed |
| User Module | ✅ Completed |
| Admin Module | ✅ Completed |
| Books Module | ✅ Completed |
| Story Books Module | ✅ Completed |
| Articles Module | ✅ Completed |
| News Module | ✅ Completed |
| Borrow Management | ✅ Completed |
| Fine Management | ✅ Completed |
| Question Forum | ✅ Completed |
| JWT Security | ✅ Completed |
| MongoDB Integration | ✅ Completed |
| Responsive UI | ✅ Completed |

---

# ⭐ Highlights

- 🔐 JWT Authentication
- 🔒 Spring Security
- 📚 Digital Library
- 📖 Online Reading
- 📥 Borrow Management
- 💰 Automatic Fine Calculation
- 👤 User Dashboard
- 👨‍💼 Admin Dashboard
- 📰 News Management
- ❓ Question Discussion Forum
- 📱 Responsive UI
- ⚡ REST API Architecture
- ☁ MongoDB NoSQL Database
- 🚀 Modern React Frontend

---


## 📂 Project Structure

```text
Management_System
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── model
│   ├── security
│   ├── config
│   └── resources
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   ├── styles
│   └── assets
│
├── screenshots
│
├── README.md
│
└── pom.xml
```

### Backend

```
controller
│
├── AdminController
├── AuthController
├── BookController
├── FeatureController
├── QuestionController
└── UserController
```

```
service
│
├── BookService
├── BorrowService
├── UserService
├── NewsService
├── StoryBookService
├── ArticleService
└── QuestionService
```

```
repository
│
├── BookRepository
├── BorrowRepository
├── UserRepository
├── NewsRepository
├── StoryBookRepository
├── ArticleRepository
└── QuestionRepository
```

```
security
│
├── SecurityConfig
├── JwtFilter
├── JwtUtil
└── UserDetailsServiceImpl
```

---

### Frontend

```
components
│
├── Navbar.jsx
├── Footer.jsx
└── Layout.jsx
```

```
pages
│
├── HomePage.jsx
├── Login.jsx
├── Register.jsx
├── Books.jsx
├── BookReader.jsx
├── ArticlesPage.jsx
├── ArticleDetail.jsx
├── StoryBooks.jsx
├── StoryBookReader.jsx
├── News.jsx
├── QuestionBank.jsx
├── UserDashboard.jsx
├── AdminDashboard.jsx
├── ManageBooks.jsx
├── ManageUsers.jsx
├── ManageNews.jsx
├── ManageArticles.jsx
├── ManageQuestions.jsx
└── BorrowRecords.jsx
```

```
services
│
├── api.js
└── libraryService.js
```

---

### Database Collections

```
users

books

articles

storybooks

news

questions

borrowrecords
```

---
# 🔄 Application Workflow

The Digital Library Management System follows a secure, role-based workflow where users and administrators interact with the application through a modern React frontend connected to a Spring Boot REST API secured with JWT Authentication.

---

## High Level Workflow

```text
                    ┌────────────────────────────┐
                    │        React Frontend      │
                    └─────────────┬──────────────┘
                                  │
                             Axios API Calls
                                  │
                    ┌─────────────▼──────────────┐
                    │   Spring Boot REST APIs    │
                    └─────────────┬──────────────┘
                                  │
                   Spring Security + JWT Filter
                                  │
                    ┌─────────────▼──────────────┐
                    │     Service Layer          │
                    └─────────────┬──────────────┘
                                  │
                         MongoDB Repository
                                  │
                    ┌─────────────▼──────────────┐
                    │        MongoDB Database    │
                    └────────────────────────────┘
```

---

# User Workflow

```text
Register
    │
    ▼
Login
    │
    ▼
JWT Authentication
    │
    ▼
Home Dashboard
    │
    ├──────────────► Browse Books
    │
    ├──────────────► Browse Articles
    │
    ├──────────────► Browse Story Books
    │
    ├──────────────► Read News
    │
    └──────────────► Question Forum
                         │
                         ▼
                  Ask / Reply Questions
```

---

# Borrow Workflow

```text
Select Library Item
          │
          ▼
Borrow Button
          │
          ▼
Borrow Confirmation Dialog
          │
          ▼
Late Fine Warning
(₹50 per day after due date)
          │
          ▼
Borrow API
          │
          ▼
Borrow Service
          │
          ▼
Borrow Record Created
          │
          ▼
Update Book Stock
          │
          ▼
Borrow History Updated
```

---

# Return Workflow

```text
Borrowed Item
       │
       ▼
Return Request
       │
       ▼
Borrow Service
       │
       ▼
Return Date Saved
       │
       ▼
Calculate Fine
       │
       ▼
Update Borrow Status
       │
       ▼
Increase Book Stock
       │
       ▼
Save Updated Record
```

---

# Question Discussion Workflow

```text
User
 │
 ▼
Ask Question
 │
 ▼
Question Collection
 │
 ▼
Community Discussion
 │
 ▼
Replies Added
 │
 ▼
Discussion Thread Updated
```

---

# Admin Workflow

```text
Admin Login
      │
      ▼
JWT Authentication
      │
      ▼
Admin Dashboard
      │
      ├────────────► Manage Books
      │
      ├────────────► Manage Users
      │
      ├────────────► Manage Articles
      │
      ├────────────► Manage News
      │
      ├────────────► Manage Questions
      │
      └────────────► Manage Borrow Records
```

---

# Authentication Workflow

```text
Login Request
      │
      ▼
Spring Security
      │
      ▼
Validate Credentials
      │
      ▼
Generate JWT Token
      │
      ▼
Return Token
      │
      ▼
Store Token in Browser
      │
      ▼
Access Protected APIs
```

---

# Fine Calculation

Every borrowed item has a due date.

If the item is returned after the due date, the system automatically calculates the fine.

```text
Fine = Late Days × ₹50
```

### Example

| Borrow Date | Due Date | Returned On | Late Days | Fine |
|-------------|----------|-------------|-----------|------|
| 01 Jul | 08 Jul | 10 Jul | 2 | ₹100 |
| 05 Jul | 12 Jul | 16 Jul | 4 | ₹200 |
| 08 Jul | 15 Jul | 15 Jul | 0 | ₹0 |

---

# Data Flow

```text
React Component
        │
        ▼
Axios Request
        │
        ▼
REST Controller
        │
        ▼
Business Service
        │
        ▼
Mongo Repository
        │
        ▼
MongoDB
        │
        ▼
JSON Response
        │
        ▼
React UI Updated
```

---

# Complete End-to-End Flow

```text
User Registration
        │
        ▼
Secure Login
        │
        ▼
JWT Authentication
        │
        ▼
Browse Library
        │
        ▼
Borrow Resource
        │
        ▼
Borrow Record Created
        │
        ▼
User Dashboard
        │
        ▼
Return Resource
        │
        ▼
Fine Calculation
        │
        ▼
Borrow Record Updated
        │
        ▼
Admin Monitoring
        │
        ▼
Application Completed
```



## 📁 Folder Responsibilities

| Folder | Responsibility |
|---------|----------------|
| controller | REST APIs |
| service | Business Logic |

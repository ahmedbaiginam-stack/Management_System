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



---

# 📷 Application Screenshots

> A quick overview of the Digital Library Management System user interface.

---

## 🏠 User Interface

<table>
<tr>
<td align="center">
<b>Home Page</b><br><br>
<img src="./screenshots/home.png" width="420">
</td>

<td align="center">
<b>Library Books</b><br><br>
<img src="./screenshots/books.png" width="420">
</td>
</tr>

<tr>
<td align="center">
<b>Book Details</b><br><br>
<img src="./screenshots/book-details.png" width="420">
</td>

<td align="center">
<b>Articles</b><br><br>
<img src="./screenshots/articles.png" width="420">
</td>
</tr>

<tr>
<td align="center">
<b>Story Books</b><br><br>
<img src="./screenshots/stories.png" width="420">
</td>

<td align="center">
<b>Latest News</b><br><br>
<img src="./screenshots/news.png" width="420">
</td>
</tr>

<tr>
<td align="center">
<b>Question Discussion</b><br><br>
<img src="./screenshots/question.png" width="420">
</td>

<td align="center">
<b>User Dashboard</b><br><br>
<img src="./screenshots/user-dashboard.png" width="420">
</td>
</tr>
</table>

---

## 👨‍💼 Administrator Panel

<table>
<tr>
<td align="center">
<b>Admin Dashboard</b><br><br>
<img src="./screenshots/admin-dashboard.png" width="420">
</td>

<td align="center">
<b>Manage Books</b><br><br>
<img src="./screenshots/admin-books-manage.png" width="420">
</td>
</tr>

<tr>
<td align="center">
<b>Manage Users</b><br><br>
<img src="./screenshots/admin-user-manage.png" width="420">
</td>

<td align="center">
<b>Manage Articles</b><br><br>
<img src="./screenshots/admin-articales-manage.png" width="420">
</td>
</tr>

<tr>
<td align="center">
<b>Manage News</b><br><br>
<img src="./screenshots/admin-news-manage.png" width="420">
</td>

<td align="center">
<b>Borrow Records</b><br><br>
<img src="./screenshots/admin-borrow-manage.png" width="420">
</td>
</tr>
</table>

---

## 📱 Responsive Design

- ✅ Desktop
- ✅ Laptop
- ✅ Tablet
- ✅ Mobile Friendly
- ✅ Bootstrap 5 Responsive Layout



---
# 🚀 Installation & Setup

Follow the steps below to run the project locally.

---

## 📋 Prerequisites

Make sure the following software is installed on your system:

| Software | Version |
|-----------|----------|
| Java | 17+ |
| Maven | 3.8+ |
| Node.js | 18+ |
| npm | 9+ |
| MongoDB | 6.0+ |
| Git | Latest |

---

# 📥 Clone the Repository

```bash
git clone https://github.com/ahmedbaiginam-stack/Management_System.git

cd Management_System
```

---

# ⚙ Backend Setup (Spring Boot)

Navigate to the backend project.

```bash
cd backend
```

Install dependencies.

```bash
mvn clean install
```

Run the application.

```bash
mvn spring-boot:run
```

Or

```bash
Run ManagementApplication.java
```

Backend Server

```
http://localhost:8080
```

---

# 🗄 MongoDB Configuration

Open

```
src/main/resources/application.properties
```

Configure your MongoDB connection.

```properties
spring.data.mongodb.uri=mongodb://localhost:27017/library_db
```

Create the database

```
library_db
```

Collections will be created automatically when the application runs.

---

# 💻 Frontend Setup (React)

Navigate to the frontend project.

```bash
cd frontend
```

Install packages.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Frontend Server

```
http://localhost:5173
```

---

# 🔑 Default Roles

The application supports two user roles.

## 👤 ROLE_USER

Permissions

- Register
- Login
- Browse Books
- Read Articles
- Read Story Books
- View News
- Borrow Library Resources
- Return Borrowed Items
- View Dashboard
- Ask Questions
- Reply to Questions

---

## 👨‍💼 ROLE_ADMIN

Permissions

- Manage Books
- Manage Users
- Manage Articles
- Manage News
- Manage Questions
- Manage Borrow Records
- Update Library Resources
- Delete Library Resources
- Monitor Borrow History

---

# 🔐 Authentication

The application uses **JWT (JSON Web Token)** for authentication.

Authentication Flow

```text
Login
   │
   ▼
Spring Security
   │
   ▼
Generate JWT Token
   │
   ▼
Store Token in Browser
   │
   ▼
Access Protected APIs
```

Every protected API request automatically includes the JWT token in the request header.

---

# 🌐 Application URLs

| Module | URL |
|----------|--------------------------------|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:8080 |
| MongoDB | mongodb://localhost:27017 |
| Swagger *(Optional)* | http://localhost:8080/swagger-ui |

---

# 📡 REST API Overview

## Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

---

## Books

```http
GET    /api/books
GET    /api/books/search
GET    /api/books/{id}
POST   /api/user/borrow/book
```

---

## Articles

```http
GET    /api/features/articles
GET    /api/features/articles/{id}
POST   /api/user/borrow/article
```

---

## Story Books

```http
GET    /api/features/storybooks
GET    /api/features/storybooks/{id}
POST   /api/user/borrow/storybook
```

---

## News

```http
GET /api/features/news
```

---

## Question Forum

```http
GET    /api/questions
POST   /api/questions
POST   /api/questions/{id}/reply
```

---

## User Dashboard

```http
GET    /api/user/borrowed-items
POST   /api/user/return/{borrowId}
```

---

## Admin APIs

```http
GET     /api/admin/books
POST    /api/admin/books
PUT     /api/admin/books/{id}
DELETE  /api/admin/books/{id}

GET     /api/admin/users
PUT     /api/admin/users/{id}
DELETE  /api/admin/users/{id}

GET     /api/admin/news
POST    /api/admin/news
PUT     /api/admin/news/{id}
DELETE  /api/admin/news/{id}

GET     /api/admin/articles
POST    /api/admin/articles
PUT     /api/admin/articles/{id}
DELETE  /api/admin/articles/{id}

GET     /api/admin/questions
DELETE  /api/admin/questions/{id}

GET     /api/admin/borrow-records
DELETE  /api/admin/borrow-records/{id}
```

---

# 📈 Performance Highlights

- ⚡ Fast REST API communication using Axios
- 🔐 Secure JWT Authentication
- 📦 MongoDB NoSQL database
- 📱 Fully Responsive Bootstrap UI
- 🔄 Dynamic React Components
- 🧩 Modular Service-Based Architecture
- 🛡 Spring Security Role-Based Authorization
- 📚 Real-Time Borrow Record Management
- 💰 Automatic Fine Calculation (₹50/day after due date)

---

# 🧪 Testing the Application

After running the project:

1. Register a new user.
2. Login using your credentials.
3. Browse books, articles, and story books.
4. Borrow a library resource.
5. View your borrowed items in the User Dashboard.
6. Return the borrowed resource.
7. Login as an Admin.
8. Manage books, users, articles, news, questions, and borrow records.
9. Verify CRUD operations and role-based access.
---
# 🤝 Contributing

Contributions are welcome!

If you'd like to improve this project, follow these steps:

1. Fork the repository.
2. Create a new feature branch.

```bash
git checkout -b feature/YourFeature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to your branch.

```bash
git push origin feature/YourFeature
```

5. Open a Pull Request.

### Contribution Guidelines

- Follow the existing project structure.
- Write clean and readable code.
- Keep commits meaningful.
- Test your changes before submitting.
- Update documentation if required.

---

# 🚀 Future Enhancements

The following features can be added in future versions:

- 📱 Mobile Application (Android/iOS)
- 📧 Email Notifications
- 💳 Online Fine Payment
- ⭐ Book Ratings & Reviews
- ❤️ Wishlist & Favorites
- 📖 Book Reservation System
- 🔍 Advanced Search & Filters
- 📊 Admin Analytics Dashboard
- 📅 Borrow History Reports
- 📂 PDF Upload Support
- 🔔 Push Notifications
- 🌙 Dark Mode
- 🌐 Multi-language Support
- ☁️ Cloud Storage Integration
- 📈 Library Usage Statistics

---

# 👨‍💻 Author

<div align="center">

## Ahmedbaig Inamdar

**Full Stack Java Developer**

Passionate about building scalable web applications using modern Java technologies and creating clean, responsive user interfaces.

### 📬 Connect With Me

[![GitHub](https://img.shields.io/badge/GitHub-ahmedbaiginam--stack-181717?style=for-the-badge&logo=github)](https://github.com/ahmedbaiginam-stack)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ahmedbaig%20Inamdar-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/)

📧 **Email:** your-email@example.com

🌍 **GitHub Repository**

https://github.com/ahmedbaiginam-stack/Management_System

</div>

---

# 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project for educational and personal purposes.

See the **LICENSE** file for more details.

---

# ⭐ Support

If you found this project useful:

- ⭐ Star this repository
- 🍴 Fork this repository
- 🐞 Report bugs
- 💡 Suggest new features
- 🤝 Contribute to the project

Your support helps improve the project and motivates further development.

---

<div align="center">

## 📚 Digital Library Management System

**Built with ❤️ using Java • Spring Boot • Spring Security • React.js • MongoDB**

### ⭐ Don't forget to Star this Repository!

</div>

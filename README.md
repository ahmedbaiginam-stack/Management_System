# 📚 Digital Library Management System

<div align="center">

<img src="https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=openjdk" />
<img src="https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot" />
<img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react" />
<img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb" />
<img src="https://img.shields.io/badge/Spring_Security-JWT-success?style=for-the-badge&logo=springsecurity" />
<img src="https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap" />

<br><br>

# 📖 Digital Library Management System

### A Full-Stack Library Management Platform built using **Spring Boot**, **React.js**, **MongoDB**, **Spring Security**, and **JWT Authentication**

The application enables users to browse digital resources, borrow books, read articles, explore story books, participate in discussions, and allows administrators to manage the complete digital library ecosystem through a secure dashboard.

</div>

---

# 📑 Table of Contents

- Overview
- Key Features
- Technology Stack
- System Architecture
- Application Workflow
- User Workflow
- Admin Workflow
- Project Structure
- Database Design
- REST APIs
- Installation Guide
- Screenshots
- Future Improvements
- Developer
- License

---

# 📖 Project Overview

The **Digital Library Management System** is a modern full-stack web application developed to simplify digital library operations.

It provides a secure environment where users can:

- Browse library books
- Read digital articles
- Explore story books
- Stay updated with library news
- Borrow digital resources
- Track borrowing history
- Participate in Question & Answer discussions

Administrators have complete control over the platform and can manage books, users, articles, news, questions, and borrowing records through a dedicated admin dashboard.

The application follows a **client-server architecture**, where the React frontend communicates with a Spring Boot REST API secured using JWT authentication.

---

# ✨ Key Features

## 👤 User Features

- Secure Registration
- Secure Login (JWT Authentication)
- Browse Library Books
- Search Books
- Read Books Online
- Read Articles
- Read Story Books
- View Latest News
- Borrow Books
- Borrow Articles
- Borrow Story Books
- Due Date Tracking
- Automatic Fine Notification
- User Dashboard
- Borrow History
- Question & Answer Discussion Forum
- Responsive User Interface

---

## 👨‍💼 Admin Features

- Secure Admin Login
- Admin Dashboard
- Manage Books
- Manage Users
- Manage News
- Manage Articles
- Manage Questions
- Manage Borrow Records
- Edit Library Resources
- Delete Library Resources
- Monitor Borrow Status
- View Returned Items
- Complete CRUD Operations

---

# 🛠 Technology Stack

| Layer | Technology |
|---------|------------|
| Programming Language | Java 17 |
| Backend Framework | Spring Boot |
| Security | Spring Security |
| Authentication | JWT |
| Database | MongoDB |
| Frontend | React.js |
| Routing | React Router DOM |
| HTTP Client | Axios |
| UI Framework | Bootstrap 5 |
| Styling | CSS3 |
| Build Tool | Maven |
| Package Manager | npm |

---

# 🏗 System Architecture

```text
                     +----------------------+
                     |    React Frontend    |
                     | (React + Bootstrap)  |
                     +----------+-----------+
                                |
                                |
                                ▼
                     +----------------------+
                     | Axios REST Requests  |
                     +----------+-----------+
                                |
                                ▼
                  +----------------------------+
                  | Spring Boot REST API       |
                  +-------------+--------------+
                                |
                Spring Security + JWT Filter
                                |
                                ▼
                  +----------------------------+
                  | Business Service Layer     |
                  +-------------+--------------+
                                |
                                ▼
                 +-----------------------------+
                 | Spring Data MongoDB         |
                 +-------------+---------------+
                                |
                                ▼
                        MongoDB Database
```

---

# 🔄 Complete Application Workflow

```text
                                START
                                  │
                                  ▼
                     User Registration/Login
                                  │
                                  ▼
                 Spring Security Authentication
                                  │
                            JWT Generation
                                  │
                                  ▼
                    Role Based Authorization
                  ┌───────────────────────────┐
                  │                           │
                  ▼                           ▼
             ROLE_USER                  ROLE_ADMIN
                  │                           │
                  ▼                           ▼
         User Dashboard               Admin Dashboard
                  │                           │
                  ▼                           ▼
      Browse Library Resources      Manage Library Resources
                  │                           │
                  ▼                           ▼
      Borrow Books / Articles        CRUD Operations
      Borrow Story Books             Books
                  │                  Users
                  ▼                  Articles
      Borrow Record Created          News
                  │                  Questions
                  ▼                  Borrow Records
      User Dashboard Updated
                  │
                  ▼
        Return Borrowed Resource
                  │
                  ▼
         Fine Calculation (₹50/day)
                  │
                  ▼
             Borrow Record Updated
                  │
                  ▼
                  END
```

---

# 👤 User Workflow

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
Home Page
    │
    ▼
Browse Books
Browse Articles
Browse Story Books
Browse News
Browse Questions
    │
    ▼
Borrow Item
    │
    ▼
Borrow Record Created
    │
    ▼
User Dashboard
    │
    ▼
Return Item
    │
    ▼
Fine Calculation
```

---

# 👨‍💼 Admin Workflow

```text
Admin Login
      │
      ▼
JWT Authentication
      │
      ▼
Admin Dashboard
      │
      ├───────────────┐
      │               │
      ▼               ▼
Manage Books     Manage Users
      │               │
      ▼               ▼
Manage News      Manage Articles
      │               │
      └───────────────┐
                      ▼
            Manage Questions
                      │
                      ▼
          Manage Borrow Records
```

---

# ⭐ Highlights

- Secure JWT Authentication
- Role-Based Authorization
- Spring Security Integration
- RESTful API Architecture
- Responsive React User Interface
- MongoDB NoSQL Database
- Borrow & Return Management
- Automatic Fine Calculation
- Question & Answer Discussion Module
- Clean MVC Architecture
- Fully Responsive Design
- Easy to Extend & Maintain

---

# 📂 Project Structure

```text
Management_System
│
├── backend
│   │
│   ├── config
│   │
│   ├── controller
│   │     ├── AdminController
│   │     ├── AuthController
│   │     ├── UserController
│   │     ├── BookController
│   │     ├── FeatureController
│   │     └── QuestionController
│   │
│   ├── model
│   │     ├── User
│   │     ├── Book
│   │     ├── BorrowRecord
│   │     ├── Article
│   │     ├── StoryBook
│   │     ├── News
│   │     └── Question
│   │
│   ├── repository
│   │     ├── UserRepository
│   │     ├── BookRepository
│   │     ├── BorrowRepository
│   │     ├── ArticleRepository
│   │     ├── StoryBookRepository
│   │     ├── NewsRepository
│   │     └── QuestionRepository
│   │
│   ├── security
│   │     ├── JwtFilter
│   │     ├── JwtUtil
│   │     ├── SecurityConfig
│   │     └── UserDetailsServiceImpl
│   │
│   ├── service
│   │     ├── UserService
│   │     ├── BookService
│   │     ├── BorrowService
│   │     ├── ArticleService
│   │     ├── StoryBookService
│   │     ├── NewsService
│   │     └── QuestionService
│   │
│   └── application.properties
│
├── frontend
│   │
│   ├── components
│   │     ├── Navbar
│   │     ├── Footer
│   │     └── Layout
│   │
│   ├── pages
│   │     ├── HomePage
│   │     ├── Login
│   │     ├── Register
│   │     ├── Books
│   │     ├── BookReader
│   │     ├── Articles
│   │     ├── ArticleDetail
│   │     ├── StoryBooks
│   │     ├── StoryBookReader
│   │     ├── News
│   │     ├── QuestionBank
│   │     ├── UserDashboard
│   │     ├── AdminDashboard
│   │     ├── ManageBooks
│   │     ├── ManageUsers
│   │     ├── ManageArticles
│   │     ├── ManageNews
│   │     ├── ManageQuestions
│   │     └── BorrowRecords
│   │
│   ├── services
│   │
│   ├── styles
│   │
│   └── App.jsx
│
├── screenshots
│
└── README.md
```

---

# 🗄 Database Collections

The application uses **MongoDB** as the database.

Collections used in the project:

```text
users

books

articles

storybooks

news

questions

borrowrecords
```

---

# ⚙️ How the System Works

```text
                     USER
                       │
               Login / Register
                       │
                       ▼
               JWT Authentication
                       │
                       ▼
               React Frontend
                       │
             Axios REST API Calls
                       │
                       ▼
            Spring Boot REST API
                       │
         Spring Security + JWT
                       │
                       ▼
             Business Services
        ┌────────────┼────────────┐
        │            │            │
        ▼            ▼            ▼
   BookService BorrowService UserService
        │            │            │
        └────────────┼────────────┘
                     ▼
                 MongoDB
                     │
                     ▼
             Response to React
```

---

# 🔐 Authentication Workflow

The application uses **JWT (JSON Web Token)** authentication.

```text
User Login
      │
      ▼
Enter Email & Password
      │
      ▼
Spring Security
      │
      ▼
Credential Verification
      │
      ▼
JWT Token Generated
      │
      ▼
Token Stored in Browser
      │
      ▼
Protected API Access
```

---

# 📥 Borrow Workflow

The borrowing process ensures secure borrowing of books, articles, and story books.

```text
User
   │
Click Borrow
   │
   ▼
Confirmation Popup
   │
   ▼
Borrow REST API
   │
   ▼
Borrow Service
   │
   ▼
Create Borrow Record
   │
   ▼
Decrease Book Stock
   │
   ▼
Save Borrow History
   │
   ▼
Update User Dashboard
```

Borrow records store:

- User Name
- Resource Name
- Resource Type
- Borrow Date
- Due Date
- Return Date
- Fine Amount
- Status

---

# 📤 Return Workflow

```text
User Returns Item
        │
        ▼
Locate Borrow Record
        │
        ▼
Update Return Date
        │
        ▼
Calculate Fine
        │
        ▼
Update Status
        │
        ▼
Increase Book Stock
        │
        ▼
Save Updated Record
```

---

# 💰 Fine Calculation

Every borrowed resource has a **7-day borrowing period**.

If the user returns the resource after the due date, the system automatically calculates the fine.

```text
Fine = Late Days × ₹50
```

Example

```text
Borrow Date : 01 July

Due Date : 08 July

Return Date : 12 July

Late Days : 4

Fine : ₹200
```

---

# 📊 User Module

The User module provides the following functionalities:

- User Registration
- Login
- JWT Authentication
- Browse Books
- Search Books
- Read Books
- Read Articles
- Read Story Books
- View News
- Borrow Resources
- View Borrow History
- Return Borrowed Resources
- View Due Dates
- Fine Notification
- Ask Questions
- Reply to Questions

---

# 🛠 Admin Module

The Admin module provides complete control over the system.

Administrator can:

- Add Books
- Edit Books
- Delete Books
- Manage Users
- Publish News
- Manage Articles
- Moderate Questions
- Manage Borrow Records
- Monitor Returned Items
- Monitor Fine Collection
- Perform CRUD Operations

---

# 📊 Role-Based Access

| Role | Permissions |
|------|-------------|
| ROLE_USER | Browse, Borrow, Read, Ask Questions |
| ROLE_ADMIN | Full CRUD Access to Library Resources |

---

# 🔄 Borrow Record Lifecycle

```text
Borrow Item
      │
      ▼
Borrow Record Created
      │
      ▼
Borrow Status = BORROWED
      │
      ▼
Return Item
      │
      ▼
Status = RETURNED
      │
      ▼
Fine Calculated
      │
      ▼
Borrow History Updated
```

---

# 📡 REST API Overview

The application follows a RESTful architecture.

### Authentication APIs

```
POST /api/auth/register

POST /api/auth/login
```

### User APIs

```
Borrow Book

Borrow Article

Borrow Story Book

Return Borrowed Item

View Borrow History
```

### Admin APIs

```
Manage Books

Manage Users

Manage Articles

Manage News

Manage Questions

Manage Borrow Records
```

---

# 🔥 Core Modules

✅ Authentication

✅ Authorization

✅ Library Management

✅ Borrow Management

✅ Fine Management

✅ Question Discussion

✅ News Management

✅ Article Management

✅ Story Book Management

✅ Admin Dashboard

---
# 🔄 Application Workflow

The Digital Library Management System follows a role-based workflow powered by **JWT Authentication**, **Spring Boot REST APIs**, **React.js**, and **MongoDB**.

---

## Overall Workflow

```text
                    START
                      │
                      ▼
           User Registration / Login
                      │
                      ▼
      Spring Security Authentication
               (JWT Token)
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
     ROLE_USER               ROLE_ADMIN
          │                       │
          ▼                       ▼
   User Dashboard          Admin Dashboard
          │                       │
          ▼                       ▼
 Browse Library            Manage Resources
 Borrow Items              CRUD Operations
 Return Items              View Reports
          │
          ▼
 Fine Calculation
          │
          ▼
         END
```

---

# 👤 User Workflow

### Step 1 – Register

New users create an account by entering their details.

```text
Registration Form
        │
        ▼
Spring Boot REST API
        │
        ▼
Password Encryption (BCrypt)
        │
        ▼
MongoDB
```

---

### Step 2 – Login

```text
Login Page
      │
      ▼
Spring Security
      │
      ▼
Credential Verification
      │
      ▼
JWT Token Generated
      │
      ▼
Stored in Browser
      │
      ▼
Access Protected Routes
```

---

### Step 3 – Explore Library

Users can browse multiple digital resources.

- 📚 Books
- 📖 Story Books
- 📰 Articles
- 🗞 News
- ❓ Question Bank

React fetches all resources through REST APIs.

```text
React UI
    │
    ├── Books API
    ├── Articles API
    ├── StoryBooks API
    ├── News API
    └── Questions API
```

---

### Step 4 – Borrow Item

Users may borrow:

- Books
- Articles
- Story Books

Before borrowing, a confirmation popup informs users about the late return fine.

```text
Select Resource
       │
       ▼
Borrow Confirmation
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
Decrease Book Stock
       │
       ▼
Update User Dashboard
```

---

### Step 5 – User Dashboard

Users can monitor all borrowed resources.

Dashboard Information:

- Borrowed Items
- Borrow Date
- Due Date
- Return Date
- Borrow Status
- Fine Amount

---

### Step 6 – Return Item

```text
Return Button
      │
      ▼
Locate Borrow Record
      │
      ▼
Update Return Date
      │
      ▼
Calculate Fine
      │
      ▼
Increase Book Stock
      │
      ▼
Update Borrow History
```

---

### Step 7 – Fine Calculation

Each borrowed resource has a due date.

If returned late:

```text
Fine = Late Days × ₹50
```

Example

```text
Borrow Date : 1 July

Due Date : 8 July

Returned : 11 July

Late Days : 3

Fine : ₹150
```

---

### Step 8 – Question Discussion Forum

Users can ask questions and reply to existing discussions.

```text
Ask Question
      │
      ▼
MongoDB
      │
      ▼
Other Users
      │
      ▼
Replies
      │
      ▼
Discussion Thread
```

---

# 👨‍💼 Admin Workflow

After authentication, administrators access the Admin Dashboard.

Modules available:

- 📚 Manage Books
- 👥 Manage Users
- 📰 Manage News
- 📝 Manage Articles
- ❓ Manage Questions
- 📖 Borrow Records

---

### Book Management

```text
Admin
   │
   ▼
Manage Books
   │
CRUD Operations
   │
MongoDB
```

Features

- Add Books
- Update Books
- Delete Books
- Update Stock

---

### User Management

```text
Admin
   │
   ▼
View Users
   │
Edit User
   │
Delete User
```

---

### Article Management

```text
Admin
   │
   ▼
Add / Edit / Delete Articles
```

---

### News Management

```text
Admin
   │
   ▼
Publish News
   │
Update News
   │
Delete News
```

---

### Question Management

```text
Admin
   │
   ▼
View Questions
   │
Delete Questions
```

---

### Borrow Record Management

```text
Admin
   │
   ▼
View Borrow Records
   │
Monitor Due Dates
   │
View Fine Details
   │
Delete Records
```

---

# 🏗 System Architecture

```text
                React.js Frontend
                       │
                React Router DOM
                       │
                     Axios
                       │
                REST API Requests
                       │
        Spring Boot REST Controllers
                       │
             Business Service Layer
                       │
          Spring Data MongoDB
                       │
                    MongoDB
```

---

# 🔐 Authentication Flow

```text
User Login
      │
      ▼
Spring Security
      │
      ▼
JWT Token
      │
      ▼
Browser Local Storage
      │
      ▼
Protected REST APIs
```

---

# 📦 Database Collections

```text
users

books

articles

storybooks

news

questions

borrowrecords
```

---

# 📌 Complete End-to-End Flow

```text
User Registration
        │
        ▼
User Login
        │
        ▼
JWT Authentication
        │
        ▼
Browse Digital Library
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
Admin Monitors System
        │
        ▼
END
```

# Smart Tourism Platform
# 🌍 Smart Tourism Platform

> Connecting Tourists with Verified Guides, Travel Agencies, and Smart Travel Experiences Across Sri Lanka.

![Spring Boot](https://img.shields.io/badge/Backend-Spring%20Boot-brightgreen)
![React](https://img.shields.io/badge/Frontend-React-blue)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue)
![Microservices](https://img.shields.io/badge/Architecture-Microservices-orange)
![License](https://img.shields.io/badge/Status-Under%20Development-yellow)

---

## 📖 Overview

The **Smart Tourism Platform** is a modern tourism management system designed to simplify travel planning and tourism service discovery in Sri Lanka.

The platform enables tourists to find **verified tour guides**, **licensed travel agencies**, book tourism services, plan personalized itineraries, make secure payments, and share reviews—all within a centralized ecosystem.

This project is being developed as a university software engineering project using modern industry practices, including **Microservices Architecture**, **REST APIs**, **Design Patterns**, and **Role-Based Access Control (RBAC)**.

---

## 🎯 Problem Statement

Tourists often face challenges such as:

* Difficulty finding trusted tour guides
* Lack of reliable tourism information
* Fragmented booking experiences
* Unverified travel agencies
* Fake or misleading reviews
* Complex trip planning processes

The Smart Tourism Platform addresses these challenges through a secure and centralized digital solution.

---

# 🚀 Key Features

### 👤 Tourist Features

* User Registration & Authentication
* Search Verified Guides
* Search Registered Travel Agencies
* Personalized Tour Planning
* Booking Management
* Review & Rating System
* Secure Online Payments
* Travel History Tracking

### 🧑‍💼 Guide Features

* Professional Profile Management
* Availability Management
* Booking Acceptance & Rejection
* Review Management
* Performance Dashboard

### 🏢 Travel Agency Features

* Agency Registration
* Package Management
* Booking Monitoring
* Agency Profile Management

### 🛡️ Admin Features

* Guide Verification & Approval
* Agency Verification & Approval
* User Management
* Booking Monitoring
* Complaint Management
* Review Moderation
* System Analytics Dashboard

---

# 🏗️ System Architecture

The platform follows a **Microservices Architecture** approach.

```text
                 API Gateway
                       │
 ┌─────────────┬─────────────┬─────────────┐
 │             │             │             │
Tourist     Guide       Booking       Review
Service     Service     Service        Service
 │             │             │             │
 └─────────────┴─────────────┴─────────────┘
               │
        Payment Service
               │
         Admin Service
```

Each service is independently deployable and responsible for a specific business domain.

---

# 🧩 Microservices

## Tourist Service

Handles:

* Registration
* Authentication
* Tourist Profiles
* Preferences

## Guide Service

Handles:

* Guide Registration
* License Verification
* Availability Management
* Guide Profiles

## Agency Service

Handles:

* Agency Registration
* Business Verification
* Agency Profiles

## Booking Service

Handles:

* Tour Bookings
* Guide Reservations
* Booking Status Tracking

## Review Service

Handles:

* Ratings
* Reviews
* Feedback Management

## Payment Service

Handles:

* Payment Processing
* Refund Management
* Transaction History

## Admin Service

Handles:

* Approvals
* User Monitoring
* Reporting
* Analytics

---

# ⚖️ Compliance & Verification

The system is designed to support verification workflows aligned with Sri Lanka tourism industry practices.

### Guide Verification

* Government License Number
* Identity Verification
* Administrative Approval

### Travel Agency Verification

* Business Registration Number
* Operating License Validation
* Administrative Approval

Only approved entities can be publicly listed and receive bookings.

---

# 🎨 Design Patterns

This project demonstrates several software engineering design patterns:

### Factory Pattern

Used for:

* Tour Package Creation
* User Creation Logic

### Strategy Pattern

Used for:

* Recommendation Engine
* Hotel Suggestions
* Tour Suggestions

### Observer Pattern

Used for:

* Booking Notifications
* Payment Notifications
* Approval Notifications

---

# 🛠️ Technology Stack

## Frontend

* React.js
* React Router
* Axios
* Bootstrap / Material UI

## Backend

* Spring Boot
* Spring Security
* Spring Data JPA
* REST APIs

## Database

* PostgreSQL

## DevOps

* GitHub
* Docker
* Postman

---

# 📂 Project Structure

```text
SmartTourismPlatform
│
├── frontend
│
├── api-gateway
│
├── tourist-service
│
├── guide-service
│
├── agency-service
│
├── booking-service
│
├── review-service
│
├── payment-service
│
├── admin-service
│
├── docs
│
└── README.md
```

---

# 👥 Team Workflow

Git Branch Strategy:

```text
main
│
└── develop
     │
     ├── feature-tourist-service
     ├── feature-guide-service
     ├── feature-agency-service
     ├── feature-booking-service
     └── feature-review-payment-admin
```

Development Process:

1. Create Feature Branch
2. Develop Feature
3. Submit Pull Request
4. Review & Test
5. Merge into Develop
6. Release to Main

---

# 📅 Development Roadmap

### Sprint 1

* Requirements Analysis
* System Design
* Database Design
* UI/UX Prototyping

### Sprint 2

* Core Microservices Development
* Authentication
* API Integration

### Sprint 3

* Frontend Development
* Testing
* Deployment Preparation

### Sprint 4

* Final Testing
* Documentation
* Demonstration

---

# 🔮 Future Enhancements

* AI-Powered Tour Recommendations
* Real-Time Chat System
* Weather Forecast Integration
* Interactive Maps
* Emergency Assistance Module
* Multi-Language Support
* Mobile Application

---

# 📚 Academic Concepts Demonstrated

* Microservices Architecture
* RESTful API Design
* Database Design
* Design Patterns
* Authentication & Authorization
* Software Engineering Principles
* Agile Development Practices
* Version Control using GitHub

---

# 🌟 Vision

To create a trusted, intelligent, and scalable tourism ecosystem that enhances the travel experience while supporting the growth of Sri Lanka’s tourism industry through technology.

---

### Made with ❤️ by the Smart Tourism Platform Development Team

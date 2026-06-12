# Architecture

## Overview

```mermaid
flowchart TB

    User[User]

    subgraph Frontend
        React[React + Vite]
    end

    subgraph Backend
        API[Express API]
        Realtime[Socket.IO]
        AI[AI Services]
        Search[Search Services]
    end

    subgraph Data
        Postgres[(PostgreSQL)]
        Redis[(Redis)]
        Files[Local File Storage]
    end

    subgraph External
        Gemini[Gemini API]
    end

    User --> React

    React --> API
    React --> Realtime

    API --> Postgres
    API --> Redis
    API --> Files

    API --> AI
    API --> Search

    Search --> Postgres

    AI --> Gemini

    Realtime --> Redis
```

## Application Architecture

```mermaid
flowchart LR

    User[User]

    subgraph Frontend
        Dashboard[Dashboard]
        Workspaces[Workspaces]
        Pages[Widget Pages]
        Files[Files & Folders]
        SearchUI[Search]
        AIChat[AI Assistant]
    end

    subgraph Backend
        Auth[Auth Service]
        WorkspaceSvc[Workspace Service]
        PageSvc[Page Service]
        FileSvc[File Service]
        SearchSvc[Search Service]
        AISvc[AI Service]
        NotificationSvc[Notification Service]
    end

    subgraph Storage
        DB[(PostgreSQL)]
        Cache[(Redis)]
        Uploads[(Local File Storage)]
    end

    Gemini[Gemini API]

    Dashboard --> Auth
    Workspaces --> WorkspaceSvc
    Pages --> PageSvc
    Files --> FileSvc
    SearchUI --> SearchSvc
    AIChat --> AISvc

    Auth --> DB
    WorkspaceSvc --> DB
    PageSvc --> DB

    FileSvc --> DB
    FileSvc --> Uploads

    SearchSvc --> DB

    NotificationSvc --> Cache

    AISvc --> DB
    AISvc --> Gemini
```

## Widget Framework

```mermaid
flowchart TB

    Page[Page]

    Page --> TextWidget[Text Widget]
    Page --> QuickLinks[Quick Links Widget]
    Page --> FileList[File List Widget]
    Page --> Activity[Recent Activity Widget]
    Page --> AIWidget[AI Widget]

    TextWidget --> Registry[Widget Registry]
    QuickLinks --> Registry
    FileList --> Registry
    Activity --> Registry
    AIWidget --> Registry
```

## Key Decisions

- Single-tenant architecture for v1
- Designed to support multi-tenancy in the future
- Widget-based page system inspired by SharePoint
- Real-time updates using Socket.IO
- Local file storage for uploaded content
- PostgreSQL as the primary database
- Redis for caching and real-time features
- Gemini API for AI-powered capabilities
- Docker Compose for local development and deployment

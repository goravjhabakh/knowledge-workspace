# Backend Architecture

## Purpose

This document describes the high-level backend structure and responsibilities of each module.

---

## Technology Stack

* Node.js
* Express
* TypeScript
* PostgreSQL
* Drizzle ORM
* Redis
* Socket.IO
* Google Gemini SDK

---

## Application Structure

```text
Backend
├── Auth
├── Users
├── Workspaces
├── Pages
├── Widgets
├── Files
├── Search
├── Activities
├── Notifications
└── AI
```

---

## Auth Module

Responsibilities:

* Login
* Registration
* JWT Authentication
* Refresh Tokens
* Authorization

---

## Users Module

Responsibilities:

* User profile management
* Workspace memberships
* User preferences

---

## Workspaces Module

Responsibilities:

* Workspace management
* Member management
* Workspace settings

---

## Pages Module

Responsibilities:

* Create pages
* Update pages
* Page layouts
* Widget placement

---

## Widgets Module

Responsibilities:

* Widget configuration
* Widget validation
* Widget registration

---

## Files Module

Responsibilities:

* File uploads
* Folder management
* Tag management
* File metadata

---

## Search Module

Responsibilities:

* Global search
* Page search
* File search

Uses:

* PostgreSQL Full Text Search

---

## Activities Module

Responsibilities:

* Activity logging
* Activity feed generation

Examples:

* File uploaded
* Page created
* User joined workspace

---

## Notifications Module

Responsibilities:

* User notifications
* Realtime updates

Uses:

* Redis
* Socket.IO

---

## AI Module

Responsibilities:

* AI chat
* Tool execution
* Workspace search
* File search
* Content summarization

Uses:

* Gemini SDK

---

## Realtime Layer

Socket.IO is used for:

* Notifications
* Activity feed updates
* User presence

---

## Storage

### PostgreSQL

Stores:

* Users
* Workspaces
* Pages
* Widgets
* Files
* Activities

### Redis

Stores:

* Cache
* Realtime data
* Temporary state

### Local File Storage

Stores:

* Uploaded files

---

## Future Enhancements

* Background jobs
* Plugin system
* Multi-tenancy
* External integrations

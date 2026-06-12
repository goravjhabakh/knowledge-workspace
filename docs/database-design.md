# Database Design

## Purpose

This document describes the core entities and relationships within the system.

Detailed database schemas will be created during implementation.

---

## Core Entities

### User

Represents a platform user.

Responsibilities:

* Authentication
* Workspace membership
* Content ownership
* Activity tracking

---

### Workspace

Represents a team or project space.

Contains:

* Members
* Pages
* Files
* Folders
* Activity

---

### Workspace Member

Represents a user's membership within a workspace.

Used for:

* Roles
* Permissions

---

### Page

Represents a SharePoint-style page.

Contains:

* Metadata
* Layout information
* Widgets

---

### Widget

Represents a configurable page component.

Examples:

* Text
* Quick Links
* File List
* Recent Activity
* AI Widget

---

### Folder

Represents a folder within a workspace.

Supports:

* Nested folders
* File organization

---

### File

Represents an uploaded file.

Contains:

* Metadata
* Storage location
* Ownership information

---

### Tag

Represents a label that can be assigned to files.

Examples:

* HR
* Engineering
* Finance
* Project-X

---

### Activity

Represents an action performed by a user.

Examples:

* File uploaded
* Page created
* Folder deleted
* Widget updated

---

### Notification

Represents a user-facing notification.

Examples:

* File shared
* Page updated
* User mentioned

---

## Relationships

```text
User
 └── Workspace Membership

Workspace
 ├── Members
 ├── Pages
 ├── Folders
 ├── Files
 ├── Activities
 └── Notifications

Page
 └── Widgets

Folder
 ├── Child Folders
 └── Files

File
 └── Tags
```

---

## Permissions

Workspace roles control access to content.

Initial roles:

* Admin
* Editor
* Viewer

Permissions may be expanded in future versions.

---

## Future Enhancements

### Multi-Tenancy

Introduce organizations above workspaces.

```text
Organization
 └── Workspaces
```

### Custom Widgets

Allow administrators to register additional widget types.

### Advanced Collaboration

* Comments
* Mentions
* Live editing

# Frontend Architecture

## Purpose

This document describes the high-level frontend structure and key architectural decisions.

---

## Technology Stack

* React
* Vite
* TypeScript
* Tailwind CSS
* TanStack Query
* Zustand
* Socket.IO Client

---

## Application Structure

```text
App
├── Authentication
├── Dashboard
├── Workspaces
├── Pages
├── Files
├── Search
└── AI Assistant
```

---

## Routing

```text
/
├── login
├── dashboard
├── workspaces
├── workspaces/:workspaceId
├── pages/:pageId
├── files
└── search
```

---

## State Management

### Server State

Managed using:

* TanStack Query

Examples:

* User data
* Workspaces
* Pages
* Files
* Search results

### Client State

Managed using:

* Zustand

Examples:

* UI preferences
* Sidebar state
* Selected workspace
* Active page

---

## Widget Framework

Pages are composed of widgets.

Example:

```text
Page
├── Text Widget
├── Quick Links Widget
├── File List Widget
├── Recent Activity Widget
└── AI Widget
```

Widgets are rendered dynamically through a widget registry.

---

## Widget Registry

The registry maps widget types to React components.

Example:

```text
text
quick-links
file-list
recent-activity
ai-widget
```

The page renderer loads widgets from the registry and displays them in the configured layout.

---

## Realtime Features

Socket.IO is used for:

* Notifications
* Activity feed updates
* User presence

---

## UI Architecture

```text
Pages
 └── Features
      └── Components
           └── UI Library
```

### UI Library

Shared reusable components.

Examples:

* Button
* Input
* Modal
* Table
* Sidebar
* Dropdown

---

## Future Enhancements

* Drag and drop page builder
* Custom widgets
* Plugin system
* Collaborative editing

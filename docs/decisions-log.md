# Decisions Log

## 2026-06-12 - Project Direction

### Decision

Build a SharePoint-inspired Workspace Platform.

### Reason

Provides a realistic product with strong learning opportunities across frontend, backend, search, real-time features, and AI.

### Alternatives Considered

- Knowledge Base
- Document Management System

---

## 2026-06-12 - Single Tenant Architecture

### Decision

Use a single-tenant architecture for v1.

### Reason

Simpler implementation while still supporting all core learning objectives.

### Future Consideration

Design data models so multi-tenancy can be added later.

---

## 2026-06-12 - Widget-Based Pages

### Decision

Pages will be built using predefined widgets.

### Reason

Aligns with SharePoint concepts and provides a strong foundation for future extensibility.

### Future Consideration

Support custom widgets and plugin architecture.

---

## 2026-06-12 - Frontend Stack

### Decision

Use React with Vite.

### Reason

Clear separation between frontend and backend while allowing deeper understanding of both systems.

### Alternatives Considered

- Next.js

---

## 2026-06-12 - Backend Stack

### Decision

Use Node.js with Express.

### Reason

Simple, flexible, and well suited for learning backend fundamentals.

### Alternatives Considered

- NestJS
- Fastify

---

## 2026-06-12 - Database

### Decision

Use PostgreSQL with Drizzle ORM.

### Reason

Strong SQL learning experience with good TypeScript support.

### Alternatives Considered

- Prisma

---

## 2026-06-12 - File Organization

### Decision

Support both folders and tags.

### Reason

Combines traditional file organization with modern content management capabilities.

---

## 2026-06-12 - AI Approach

### Decision

Use Gemini SDK directly.

### Reason

Provides a better understanding of tool calling, agent loops, and AI integration.

### Alternatives Considered

- LangChain
- LangGraph

---

## 2026-06-12 - Search Strategy

### Decision

Use PostgreSQL Full Text Search.

### Reason

Simple architecture and fewer moving parts.

### Alternatives Considered

- Elasticsearch
- Vector Search

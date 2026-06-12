# Testing Strategy

## Goal

Ensure core functionality works reliably without overcomplicating testing.

## Testing Levels

### Unit Tests

Test individual functions and business logic.

Examples:

* Permission checks
* Utility functions
* Service methods

### Integration Tests

Test API endpoints and database interactions.

Examples:

* Authentication
* Workspace management
* File operations

### End-to-End Tests

Test critical user workflows.

Examples:

* User login
* Create workspace
* Upload file
* Create page

## Priorities

Focus testing on:

1. Authentication
2. Permissions
3. File Management
4. Widget Pages
5. Search

## Tools

* Vitest
* Supertest
* Playwright

## Notes

Prioritize meaningful tests over high coverage percentages.

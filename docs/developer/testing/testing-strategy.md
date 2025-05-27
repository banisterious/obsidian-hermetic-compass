# Testing Strategy

## Table of Contents
- [Overview](#overview)
- [Testing Layers](#testing-layers)
  - [Unit Tests](#unit-tests)
  - [Integration Tests](#integration-tests)
  - [End-to-End Tests](#end-to-end-tests)
- [Test Organization](#test-organization)
- [Testing Tools](#testing-tools)
- [Test Coverage](#test-coverage)
- [CI/CD Integration](#cicd-integration)

## Overview

This document outlines the testing strategy for the Obsidian Hermetic Compass plugin. The testing approach aligns with the modular architecture to ensure high code quality, prevent regressions, and facilitate continuous development.

## Testing Layers

The testing strategy employs a pyramidal approach with three layers:

### Unit Tests

Unit tests focus on testing individual modules in isolation. Each module should have corresponding unit tests that verify its functionality without dependencies on other modules.

**Key characteristics:**
- Fast execution
- High isolation (dependencies are mocked)
- Focus on business logic
- One test file per source file

**Examples of unit testable modules:**
- Numerology calculations
- Profile generation logic
- Utility functions

### Integration Tests

Integration tests verify that multiple modules work together correctly. These tests focus on the interfaces between modules and ensure proper integration.

**Key characteristics:**
- Test multiple modules together
- Minimal mocking (only external dependencies)
- Focus on module interactions
- Cover critical paths through the system

**Examples of integration tests:**
- Settings persistence and loading
- Profile generation with actual calculation service
- File operations with the Obsidian API

### End-to-End Tests

End-to-end tests verify the functionality of the entire plugin from a user's perspective. These tests interact with the plugin as a user would and verify expected outcomes.

**Key characteristics:**
- Test the entire plugin
- No mocking (real environment)
- Focus on user workflows
- Cover critical user journeys

**Examples of end-to-end tests:**
- Complete profile generation workflow
- Settings configuration
- Growth chart navigation

## Test Organization

Tests are organized to mirror the source code structure:

```
tests/
├── unit/                    # Unit tests
│   ├── models/              # Tests for data models
│   ├── services/            # Tests for services
│   │   ├── calculations/    # Tests for calculation services
│   │   └── profile/         # Tests for profile services
│   └── utils/               # Tests for utilities
├── integration/             # Integration tests
│   ├── settings/            # Tests for settings persistence
│   └── profile/             # Tests for profile generation
└── e2e/                     # End-to-end tests
    ├── profile-generation/  # Tests for profile generation workflow
    └── growth-chart/        # Tests for growth chart workflow
```

## Testing Tools

The following tools are used for testing:

- **Jest**: Primary testing framework for unit and integration tests
- **Testing Library**: For testing UI components
- **Mock Service Worker**: For mocking external services
- **Obsidian Test Helpers**: Custom utilities for testing Obsidian-specific functionality

## Test Coverage

The project aims for the following test coverage targets:

- **Unit tests**: 80%+ coverage of all services and utilities
- **Integration tests**: Cover all critical module interactions
- **End-to-end tests**: Cover all main user workflows

Coverage reports are generated during the CI/CD process to track these metrics.

## CI/CD Integration

Tests are integrated into the CI/CD pipeline with the following approach:

1. **Pre-commit hooks**: Run linting and unit tests
2. **Pull request validation**: Run all tests and generate coverage reports
3. **Release validation**: Run all tests before creating a release

This ensures that all code changes are thoroughly tested before being released to users. 
# Obsidian Hermetic Compass: Testing Strategy

## Table of Contents
- [1. Introduction](#1-introduction)
  - [1.1. Purpose](#11-purpose)
  - [1.2. Testing Principles](#12-testing-principles)
- [2. Testing Levels](#2-testing-levels)
  - [2.1. Unit Testing](#21-unit-testing)
  - [2.2. Integration Testing](#22-integration-testing)
  - [2.3. UI Testing](#23-ui-testing)
  - [2.4. End-to-End Testing](#24-end-to-end-testing)
- [3. Test Environment](#3-test-environment)
  - [3.1. Development Environment](#31-development-environment)
  - [3.2. Test Data](#32-test-data)
- [4. Testing Areas](#4-testing-areas)
  - [4.1. Core Calculations](#41-core-calculations)
  - [4.2. Profile Report Generation](#42-profile-report-generation)
  - [4.3. Growth Chart Display](#43-growth-chart-display)
  - [4.4. Card Description Viewer](#44-card-description-viewer)
  - [4.5. Settings and Configuration](#45-settings-and-configuration)
- [5. Testing Tools and Frameworks](#5-testing-tools-and-frameworks)
  - [5.1. Unit Testing Framework](#51-unit-testing-framework)
  - [5.2. Mock Objects](#52-mock-objects)
  - [5.3. Test Runners](#53-test-runners)
- [6. Test Case Design](#6-test-case-design)
  - [6.1. Test Case Template](#61-test-case-template)
  - [6.2. Test Case Naming Convention](#62-test-case-naming-convention)
- [7. Test Execution](#7-test-execution)
  - [7.1. Testing Workflow](#71-testing-workflow)
  - [7.2. Bug Reporting](#72-bug-reporting)
- [8. Test Automation](#8-test-automation)
  - [8.1. Automated Tests](#81-automated-tests)
  - [8.2. CI/CD Integration](#82-cicd-integration)

## 1. Introduction

### 1.1. Purpose

This document outlines the testing strategy for the Obsidian Hermetic Compass plugin. It defines the approach, methodologies, and tools used to ensure the quality and reliability of the plugin throughout its development lifecycle.

### 1.2. Testing Principles

The testing approach is guided by these core principles:

- **Early Testing**: Begin testing as early as possible in the development process
- **Comprehensive Coverage**: Test all critical functionality and edge cases
- **Automation**: Automate repetitive tests where feasible
- **Data Validation**: Ensure numerological calculations are accurate and consistent
- **User Experience**: Verify that the UI is intuitive and accessible

## 2. Testing Levels

### 2.1. Unit Testing

Unit tests will focus on verifying the correctness of individual functions and components:

- **Calculation Functions**: Test each numerological calculation independently
- **Utility Functions**: Test helper functions for data manipulation
- **UI Components**: Test individual UI components in isolation

Each unit test should:
- Test a single function or component
- Mock external dependencies
- Cover both normal and edge cases
- Verify expected outputs for given inputs

### 2.2. Integration Testing

Integration tests will verify that components work together correctly:

- **Calculation Module Integration**: Test that calculation functions work together to produce correct Profile Reports and Growth Charts
- **UI and Data Flow**: Test that UI components correctly display and interact with calculated data
- **Settings and Plugin Core**: Test that user settings correctly affect plugin behavior

### 2.3. UI Testing

UI tests will focus on verifying the user interface functionality:

- **Modal Display and Interaction**: Test modals for the Growth Chart and Card Description Viewer
- **Settings Interface**: Test the settings panel and user input handling
- **Command Palette Integration**: Test command palette functionality
- **Markdown Rendering**: Test the rendering of generated Profile Reports

### 2.4. End-to-End Testing

End-to-end tests will simulate real user workflows:

- **Complete Profile Generation Workflow**: Test the entire process from entering user data to viewing the Profile Report
- **Growth Chart Navigation**: Test year navigation and interaction with the Growth Chart
- **Integration with Obsidian**: Test how the plugin interacts with the broader Obsidian environment

## 3. Test Environment

### 3.1. Development Environment

Testing will be conducted in the following environments:

- **Local Development**: During development on developers' machines
- **Test Vault**: A dedicated Obsidian vault with test data
- **Multiple Platforms**: Windows, macOS, and Linux where feasible

### 3.2. Test Data

The following test data will be used:

- **Sample User Profiles**: A set of predefined user profiles with known calculation results
- **Test Card Images**: Non-copyrighted test images for development
- **Mock Card Descriptions**: Sample Markdown files for card descriptions
- **Edge Case Data**: Special cases like master numbers, unusual names, etc.

## 4. Testing Areas

### 4.1. Core Calculations

Testing of the core calculation logic will include:

- **Name Symbol Calculations**: Verify correct conversion from letters to numbers
- **Birth Symbol Calculations**: Test all birth date-derived calculations
- **Reduction Rules**: Test numerological reduction for various inputs
- **Personality Choice Calculations**: Test yearly card derivation
- **Path Mapping**: Verify correct mapping from numbers to "Path" descriptions

**Test Cases Example:**
```javascript
test('should correctly reduce a number according to Arrien rules', () => {
  expect(reduceNumber(1)).toBe(1);
  expect(reduceNumber(10)).toBe(10);
  expect(reduceNumber(11)).toBe(11);  // Master number
  expect(reduceNumber(22)).toBe(22);  // Master number
  expect(reduceNumber(23)).toBe(5);   // 2+3=5
  expect(reduceNumber(123)).toBe(6);  // 1+2+3=6
});
```

### 4.2. Profile Report Generation

Testing of the Profile Report generation will include:

- **Report Structure**: Verify correct Markdown structure
- **Content Accuracy**: Test that calculated values appear correctly
- **Image Embedding**: Test the embedding of card images
- **Link Generation**: Verify links to card descriptions

### 4.3. Growth Chart Display

Testing of the Growth Chart display will include:

- **Data Accuracy**: Verify correct year-by-year calculations
- **Navigation**: Test scrolling and year selection
- **Visual Display**: Test the display of card thumbnails, names, and paths
- **Link Copying**: Test the "Copy Markdown Link" functionality

### 4.4. Card Description Viewer

Testing of the Card Description Viewer will include:

- **Navigation**: Test navigation between cards
- **Content Display**: Verify correct rendering of Markdown notes
- **Modal Interaction**: Test opening and closing the modal
- **Integration**: Test launching from Profile Report and Growth Chart

### 4.5. Settings and Configuration

Testing of the settings and configuration will include:

- **User Data Storage**: Test saving and loading user data
- **File Path Configuration**: Test configuration of image and note paths
- **Validation**: Test input validation for user data
- **Persistence**: Verify settings are saved correctly between sessions

## 5. Testing Tools and Frameworks

### 5.1. Unit Testing Framework

The recommended testing framework is Jest, which offers:

- Easy test creation and execution
- Built-in assertion library
- Mocking capabilities
- Coverage reporting

### 5.2. Mock Objects

For testing components that depend on Obsidian APIs:

- Create mock objects for Obsidian's API classes
- Simulate vault operations, file access, and settings

### 5.3. Test Runners

- **Jest**: For running unit and integration tests
- **Manual Testing Checklist**: For UI and end-to-end tests

## 6. Test Case Design

### 6.1. Test Case Template

Each test case should follow this structure:

```javascript
/**
 * Test: [Brief description]
 * 
 * Purpose: [What aspect is being tested]
 * Input: [Test inputs]
 * Expected Output: [Expected result]
 * Edge Cases: [If applicable]
 */
test('[Test description]', () => {
  // Arrange
  const input = [...];
  
  // Act
  const result = functionUnderTest(input);
  
  // Assert
  expect(result).toBe(expectedOutput);
});
```

### 6.2. Test Case Naming Convention

- Use descriptive names that explain what is being tested
- Follow the pattern: `[unit]_[scenario]_[expected result]`
- Examples:
  - `reduceNumber_masterNumber_returnsUnchanged`
  - `calculateNameSymbol_complexName_returnsCorrectCard`
  - `growthChart_longDateRange_generatesAllYears`

## 7. Test Execution

### 7.1. Testing Workflow

1. **Development Testing**: Developers run unit tests during development
2. **Pre-commit Testing**: Run all automated tests before committing code
3. **Feature Completion Testing**: Complete all test types when a feature is completed
4. **Regression Testing**: Run automated tests after any significant changes

### 7.2. Bug Reporting

When bugs are found:

1. Create an issue with detailed reproduction steps
2. Include expected vs. actual behavior
3. Add relevant environment information
4. Create a failing test that demonstrates the bug
5. Fix the bug and verify the test passes

## 8. Test Automation

### 8.1. Automated Tests

The following tests should be automated:

- All unit tests
- Integration tests for calculation functions
- Basic UI component tests

### 8.2. CI/CD Integration

Set up continuous integration to:

- Run tests automatically on push
- Report test results and coverage
- Fail builds if tests don't pass 
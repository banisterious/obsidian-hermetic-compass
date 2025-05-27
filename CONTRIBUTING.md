# Contributing to Obsidian Hermetic Compass

Thank you for considering contributing to Obsidian Hermetic Compass! This document provides guidelines and instructions for contributing to the project.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Code Contributions](#code-contributions)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Documentation](#documentation)
- [Testing](#testing)

## Code of Conduct

This project adheres to a Code of Conduct that establishes expected behavior in our community. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Bugs

Before submitting a bug report:
- Check the [issue tracker](../../issues) to see if the problem has already been reported
- Make sure you're using the latest version of the plugin

When submitting a bug report, please include:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected vs. actual behavior
- Screenshots if applicable
- Your Obsidian version and operating system
- Any relevant console errors

### Suggesting Features

Feature suggestions are welcome! When suggesting a feature:
- Provide a clear description of the feature
- Explain how it would benefit users
- Describe any potential implementation challenges
- Include mockups or examples if possible

### Code Contributions

Code contributions should be focused on:
- Bug fixes
- Performance improvements
- New features aligned with the project roadmap
- Documentation improvements

## Development Setup

1. Fork the repository
2. Clone your fork locally
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a development vault for testing:
   ```bash
   mkdir test-vault
   ```
5. Build the plugin:
   ```bash
   npm run build
   ```
6. Link the built plugin to your test vault

## Pull Request Process

1. Create a new branch for your feature or bugfix
2. Make your changes with appropriate tests
3. Update documentation as needed
4. Ensure all tests pass
5. Submit a pull request to the main repository
6. Include a clear description of the changes
7. Reference any related issues

## Coding Standards

- Follow the existing code style
- Use TypeScript for all new code
- Include JSDoc comments for public APIs
- Follow the [Obsidian API guidelines](https://github.com/obsidianmd/obsidian-api)
- Use meaningful variable and function names
- Keep functions small and focused on a single task

## Documentation

- Update relevant documentation for any changes
- Follow the [documentation style guide](docs/assets/templates/documentation-style-guide.md)
- Include code examples where appropriate
- Ensure documentation is clear and accessible

## Testing

- Write tests for new features and bug fixes
- Follow the [testing strategy](docs/developer/testing/testing-strategy.md)
- Test your changes across different platforms if possible
- Include test cases that cover edge cases 
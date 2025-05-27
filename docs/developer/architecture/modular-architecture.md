# Modular Architecture

## Overview

The Obsidian Hermetic Compass plugin follows a modular architecture to enhance maintainability, testability, and ease of collaboration. Instead of a monolithic approach with a single large file, the codebase is organized into logical modules with clear responsibilities.

## Naming Conventions

The project uses the following naming conventions:

- TypeScript classes and interfaces use the `Ohcp` prefix (Obsidian Hermetic Compass Plugin)
- CSS classes use the `ohcp-` prefix
- File names use kebab-case (e.g., `profile-generator.ts`)
- Directory names use lowercase with no hyphens

## Directory Structure

```
src/
├── main.ts                  # Entry point, minimal code with plugin lifecycle
├── models/                  # Data models and interfaces
│   └── settings.ts          # Settings interface and defaults
├── services/                # Core business logic
│   ├── calculations/        # Numerology and mathematical calculations
│   │   └── numerology.ts    # Birth number calculations
│   └── profile/             # Profile generation services
│       └── profileGenerator.ts # Tarot profile generation
├── ui/                      # User interface components
│   ├── modals/              # Modal windows for displaying information
│   ├── views/               # Views for different features
│   └── settings/            # Settings tab UI
│       └── SettingsTab.ts   # Settings panel implementation
├── utils/                   # Utility functions
│   └── fileUtils.ts         # File system operations
└── assets/                  # Static assets
    ├── fonts/               # Custom icon fonts
    └── images/              # Card images and other visual assets
```

## Module Responsibilities

### main.ts

- Plugin lifecycle (load/unload)
- Command registration
- Top-level integration of modules

### models/

- Data structures
- Interfaces
- Type definitions

### services/

- Core business logic
- Calculations
- Profile generation
- Growth chart functionality

### ui/

- User interface components
- Modal windows
- Views
- Settings panel

### utils/

- Helper functions
- File operations
- Common utilities

### assets/

- Icon fonts for UI representation of cards
- Detailed card images for rich displays
- Static resources needed by the plugin

## Feature-Specific Plans

The plugin includes several key features with dedicated implementation plans:

1. [Calculation Implementation](../../planning/calculation-implementation.md) - Numerology and card calculation formulas
2. [Card Imagery Implementation](../../planning/features/card-imagery-implementation.md) - Hybrid approach with icon fonts and image sets

## Benefits of Modular Approach

1. **Maintainability**: Each module has a single responsibility, making code easier to understand and modify
2. **Testability**: Modules can be tested in isolation
3. **Collaboration**: Multiple developers can work on different modules simultaneously
4. **Scalability**: New features can be added by creating new modules without modifying existing code
5. **Code Reuse**: Modules can be reused across different parts of the application

## Development Guidelines

When adding new features:

1. Identify the appropriate module for the feature
2. If no suitable module exists, create a new one
3. Keep module interfaces simple and focused
4. Minimize dependencies between modules
5. Use dependency injection for module dependencies when possible
6. Write tests for each module to ensure proper functionality
7. Follow the established naming conventions (Ohcp prefix for classes, ohcp- prefix for CSS)

## Current Limitations and Future Improvements

- Consider implementing a dependency injection system for better module composition
- Add a state management system for complex application state
- Improve error handling across module boundaries
- Add more comprehensive test coverage for all modules 
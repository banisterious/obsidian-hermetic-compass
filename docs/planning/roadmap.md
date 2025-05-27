# Obsidian Hermetic Compass: Development Roadmap

## Table of Contents
- [Phase 1: Core Calculation & Foundation (MVP)](#phase-1-core-calculation--foundation-mvp)
  - [1.1 Basic Setup & Configuration](#11-basic-setup--configuration)
  - [1.2 Core Calculations](#12-core-calculations)
  - [1.3 Basic Profile Report](#13-basic-profile-report)
  - [1.4 Simple Growth Chart Display](#14-simple-growth-chart-display)
- [Phase 2: UI/UX Enhancement & Advanced Features](#phase-2-uiux-enhancement--advanced-features)
  - [2.1 Advanced Profile Report](#21-advanced-profile-report)
  - [2.2 Interactive Growth Chart](#22-interactive-growth-chart)
  - [2.3 Card Description Viewer](#23-card-description-viewer)
  - [2.4 Link Integration](#24-link-integration)
- [Phase 3: Visual Integration & Asset Management](#phase-3-visual-integration--asset-management)
  - [3.1 Thoth Card Image Integration](#31-thoth-card-image-integration)
  - [3.2 Custom Icons & Font Set](#32-custom-icons--font-set)
  - [3.3 Card Description Template](#33-card-description-template)
  - [3.4 Spirit Choice Data Management](#34-spirit-choice-data-management)
- [Phase 4: Refinement & Polish](#phase-4-refinement--polish)
  - [4.1 UI/UX Improvements](#41-uiux-improvements)
  - [4.2 Error Handling & Validation](#42-error-handling--validation)
  - [4.3 Performance Optimization](#43-performance-optimization)
  - [4.4 Settings UI Enhancement](#44-settings-ui-enhancement)
- [Future Considerations (v2+)](#future-considerations-v2)

## Phase 1: Core Calculation & Foundation (MVP)
- **1.1 Basic Setup & Configuration**
  - Create plugin scaffolding and initialization
  - Implement settings storage for user data (name, DOB, birth time)
  - Add configuration options for file paths (card images, descriptions)

- **1.2 Core Calculations**
  - Implement numerology algorithms for Name Symbols
  - Build date-based logic for Birth Symbols (Lifetime Personality, Soul/Spiritual, Hidden Factor, Court Card)
  - Develop Major Path Placement calculation
  - Create Zodiac Symbol lookup functionality
  - Implement "Personality Choice" card derivation (Birth Month + Birth Day + Current Year)

- **1.3 Basic Profile Report**
  - Generate simple Markdown output with calculated Tarot profile
  - Implement basic command palette integration
  - Create minimal profile report template

- **1.4 Simple Growth Chart Display**
  - Develop basic year-by-year calculation
  - Create simple listing of years with corresponding cards and paths
  - Implement minimal command to generate and view chart

## Phase 2: UI/UX Enhancement & Advanced Features
- **2.1 Advanced Profile Report**
  - Design comprehensive Markdown template with proper structure
  - Add embedding of card images (when available)
  - Implement on-demand generation with command palette integration
  - Create links to detailed card descriptions

- **2.2 Interactive Growth Chart**
  - Develop dedicated modal window or sidebar leaf for display
  - Implement scrollable interface with year navigation
  - Add "Copy Markdown Link for this Year" functionality
  - Create visual hierarchy (Card Image, Name, Path)

- **2.3 Card Description Viewer**
  - Develop modal interface for card descriptions
  - Implement navigation between cards
  - Create rendering system for card description notes
  - Add integration with Profile Report and Growth Chart

- **2.4 Link Integration**
  - Implement linking system between Growth Chart and journal entries
  - Create consistent linking format for Tarot references

## Phase 3: Visual Integration & Asset Management
- **3.1 Thoth Card Image Integration**
  - Add support for user-provided card images
  - Implement image embedding in Profile Report
  - Add image thumbnails to Growth Chart
  - Create fallbacks for missing images

- **3.2 Custom Icons & Font Set**
  - Develop support for custom card icons/font characters
  - Implement icon display in Growth Chart
  - Add icon integration in Profile Report (optional)

- **3.3 Card Description Template**
  - Create recommended template structure
  - Develop documentation for template usage
  - Add template generation functionality (optional)

- **3.4 Spirit Choice Data Management**
  - Implement storage and lookup for universal "Path" meanings
  - Create data structure for Arrien's interpretations

## Phase 4: Refinement & Polish
- **4.1 UI/UX Improvements**
  - Enhance styling and visual appeal
  - Improve modal layouts and responsiveness
  - Add animations and transitions for better UX
  - Implement accessibility improvements

- **4.2 Error Handling & Validation**
  - Add input validation for user data
  - Implement error handling for calculations
  - Create user-friendly error messages
  - Add data validation for card descriptions and images

- **4.3 Performance Optimization**
  - Optimize Growth Chart for large year ranges
  - Improve loading times for card images
  - Enhance rendering performance for description modal

- **4.4 Settings UI Enhancement**
  - Create comprehensive settings interface
  - Add validation and testing of file paths
  - Implement import/export of settings (optional)
  - Add detailed documentation within settings

## Future Considerations (v2+)
- Mobile compatibility and responsive design
- Integration with other Obsidian plugins (e.g., Templater, Dataview)
- Advanced journaling features and automated connections
- Additional Tarot decks support
- Customizable calculation methods
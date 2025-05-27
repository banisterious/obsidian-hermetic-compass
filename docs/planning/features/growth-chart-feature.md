# Growth Chart Feature Plan

## Table of Contents
- [1. Overview](#1-overview)
- [2. User Stories](#2-user-stories)
- [3. Feature Requirements](#3-feature-requirements)
  - [3.1. Calculation Requirements](#31-calculation-requirements)
  - [3.2. Display Requirements](#32-display-requirements)
  - [3.3. Interaction Requirements](#33-interaction-requirements)
  - [3.4. Visual Requirements](#34-visual-requirements)
- [4. Technical Specifications](#4-technical-specifications)
  - [4.1. Implementation Components](#41-implementation-components)
  - [4.2. Data Model](#42-data-model)
  - [4.3. Module Dependencies](#43-module-dependencies)
- [5. UI/UX Design](#5-uiux-design)
  - [5.1. Interface Layout](#51-interface-layout)
  - [5.2. User Interactions](#52-user-interactions)
  - [5.3. Visual Design](#53-visual-design)
- [6. Implementation Plan](#6-implementation-plan)
  - [6.1. Phase 1: Core Calculation](#61-phase-1-core-calculation)
  - [6.2. Phase 2: Basic Display](#62-phase-2-basic-display)
  - [6.3. Phase 3: Enhanced UI](#63-phase-3-enhanced-ui)
  - [6.4. Phase 4: Visual Integration](#64-phase-4-visual-integration)
- [7. Testing Plan](#7-testing-plan)
- [8. Documentation Plan](#8-documentation-plan)

## 1. Overview

The Growth Chart is a core feature of the Obsidian Hermetic Compass plugin that presents the user with a year-by-year view of their "Personality Choice" Tarot cards. Each year is calculated based on Angeles Arrien's numerological system, showing the corresponding Major Arcana card and associated "Path" for that year of the user's life.

This feature helps users understand the archetypal energies and growth opportunities present in different years of their life, providing insight into personal development patterns and cycles.

## 2. User Stories

- **As a user**, I want to see my yearly Tarot cards in a chronological list so that I can understand the patterns of archetypal energies throughout my life.
- **As a user**, I want to quickly navigate to specific years in my Growth Chart so that I can focus on particular life periods.
- **As a user**, I want to see card images alongside the card names so that I can visually connect with the archetypal energies.
- **As a user**, I want to copy a Markdown link for a specific year so that I can reference it in my journal entries.
- **As a user**, I want to click on a card to see its detailed description so that I can understand its meaning more deeply.
- **As a user**, I want the Growth Chart to load quickly, even when displaying many years of data.

## 3. Feature Requirements

### 3.1. Calculation Requirements

- **Personality Choice Calculation**: Accurately calculate the yearly Personality Choice card using the formula: Birth Month + Birth Day + Current Year (with appropriate numerological reduction).
- **Path Derivation**: Map each card to its corresponding "Path" meaning according to Arrien's system.
- **Year Range**: Generate cards for the user's entire lifespan, from birth year to at least 100 years in the future.
- **Dynamic Updates**: Recalculate if user birth data changes.

### 3.2. Display Requirements

- **Layout**: Present years in a chronological, scrollable list or table.
- **Year Data**: For each year, display:
  - Age
  - Calendar Year
  - Personality Card (name, image thumbnail, and custom icon/font character)
  - Corresponding "Path"
- **Scrolling**: Support smooth scrolling through potentially many years of data.
- **Navigation**: Include quick navigation to jump to specific years or ages.
- **Responsiveness**: Adapt to different window sizes and Obsidian themes.

### 3.3. Interaction Requirements

- **Copying**: Provide a "Copy Markdown Link" button for each year that formats a link like `[[GrowthChart_YYYY_CardName_Path]]`.
- **Card Details**: Allow clicking on a card's name, image, or icon to display its detailed description.
- **Year Selection**: Support selecting or highlighting the current year.
- **Command Integration**: Make the Growth Chart accessible via Obsidian's Command Palette.

### 3.4. Visual Requirements

- **Card Thumbnails**: Display user-provided Thoth card images as thumbnails.
- **Custom Icons**: Show custom icon or font character for each card.
- **Visual Hierarchy**: Create clear visual hierarchy between different elements.
- **Theming**: Support both light and dark Obsidian themes.

## 4. Technical Specifications

### 4.1. Implementation Components

1. **GrowthChartCalculator**: Core calculation logic for generating the Growth Chart data.
2. **GrowthChartView**: UI component for displaying the Growth Chart.
3. **GrowthChartModal**: Modal window to contain the Growth Chart view.
4. **GrowthChartItem**: Component representing a single year entry.
5. **GrowthChartNavigation**: Component for year navigation.

### 4.2. Data Model

```typescript
interface GrowthChartEntry {
  age: number;
  year: number;
  personalityCard: {
    number: number;
    name: string;
    imagePath?: string;
    iconChar?: string;
  };
  path: string;
}

interface GrowthChartData {
  entries: GrowthChartEntry[];
  birthYear: number;
  birthMonth: number;
  birthDay: number;
  userName: string;
}
```

### 4.3. Module Dependencies

- **Core Plugin**: For settings access and initialization
- **Calculation Module**: For numerological functions and card mappings
- **Card Description Module**: For displaying detailed card information
- **Obsidian API**: For modal creation, markdown handling, and vault integration

## 5. UI/UX Design

### 5.1. Interface Layout

The Growth Chart will be displayed in a modal window with these components:

1. **Header**:
   - Title ("Your Growth Chart")
   - Close button
   - Navigation controls

2. **Navigation Area**:
   - Year/age quick jump controls
   - Current selection indicator

3. **Growth Chart Body**:
   - Scrollable container
   - Year entries in chronological order

4. **Year Entry Layout**:
   - Left: Age and Year (e.g., "Age 30 • 2025")
   - Center: Card thumbnail and name
   - Right: Path and "Copy Link" button

### 5.2. User Interactions

- **Scrolling**: The user can scroll through the years using the mouse wheel or touch gestures.
- **Jump Navigation**: The user can quickly jump to a specific year or age using navigation controls.
- **Card Selection**: Clicking on a card's name, image, or icon will open the Card Description Viewer.
- **Link Copying**: Clicking the "Copy Link" button will copy a Markdown link to the clipboard.
- **Year Highlighting**: The current year will be visually highlighted by default.

### 5.3. Visual Design

- **Card Thumbnails**: Small (approx. 40x60px) versions of the Thoth card images.
- **Custom Icons**: Display custom icons beside or in place of thumbnails if images aren't available.
- **Color Scheme**: Follow Obsidian's theming system with subtle highlights for the current year.
- **Typography**: Clear hierarchy with larger text for card names, smaller for paths and years.
- **Spacing**: Comfortable spacing between year entries for readability.

## 6. Implementation Plan

### 6.1. Phase 1: Core Calculation

- Implement the `GrowthChartCalculator` class with core numerological functions
- Create the data model and interfaces
- Develop unit tests for calculation accuracy
- Implement basic data generation for a range of years

### 6.2. Phase 2: Basic Display

- Create a simple modal to display the Growth Chart
- Implement basic scrollable list of years
- Add command palette integration
- Display essential information (year, age, card name, path)
- Implement "Copy Link" functionality

### 6.3. Phase 3: Enhanced UI

- Improve navigation with year jumping
- Add current year highlighting
- Enhance scrolling performance for long date ranges
- Implement card selection to view descriptions
- Refine UI layout and styling

### 6.4. Phase 4: Visual Integration

- Add support for card thumbnails
- Integrate custom icons/font characters
- Polish visual appearance and animations
- Ensure responsive design
- Add final styling and theme compatibility

## 7. Testing Plan

- **Unit Tests**: Test calculation functions for accuracy
- **Integration Tests**: Verify the Growth Chart works with other plugin components
- **UI Tests**: Test display and interaction elements
- **Performance Tests**: Ensure smooth performance with large date ranges
- **Compatibility Tests**: Test with different Obsidian themes and settings

Test specific edge cases:
- Master numbers (11, 22) in calculations
- Very long date ranges (100+ years)
- Missing card images or descriptions
- Different window sizes and orientations

## 8. Documentation Plan

Create the following documentation:

- **User Guide**: How to access and use the Growth Chart
- **Developer Guide**: Implementation details for maintenance
- **Markdown Templates**: Examples of the generated links
- **Settings Guide**: How to configure related settings
- **In-app Help**: Tooltips and contextual help within the interface 
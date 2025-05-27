# Calculation Implementation Plan

## Overview

This document outlines the plan for incrementally implementing the numerological and tarot calculations from the reference spreadsheet into the Obsidian Hermetic Compass plugin. The implementation will follow a collaborative Q&A approach, with formulas being shared and implemented one at a time.

## Implementation Approach

1. For each calculation needed in the plugin, we'll follow this process:
   - Identify the specific calculation to implement
   - Discuss the requirements and any edge cases
   - Share the relevant formula(s) from the reference spreadsheet
   - Implement the calculation in TypeScript
   - Test with known values to ensure accuracy

2. This document will track the status of each calculation and serve as a reference for what needs to be implemented.

## Calculation Components

### Core Numerology

| Calculation | Description | Status | Questions | Implementation Notes |
|-------------|-------------|--------|-----------|----------------------|
| Birth Number | Calculate the birth number from birth date | To Do | How are master numbers handled? | |
| Name Number | Calculate the name number from full name | To Do | Is there a specific letter-to-number mapping? | |
| Path Number | Calculate life path number | To Do | | |

### Tarot Card Mappings

| Calculation | Description | Status | Questions | Implementation Notes |
|-------------|-------------|--------|-----------|----------------------|
| Birth Card | Map birth number to Thoth tarot card(s) | To Do | Is there a one-to-one or one-to-many mapping? | |
| Name Card | Map name number to Thoth tarot card(s) | To Do | | |
| Year Card | Calculate current year's card | To Do | How is the yearly progression determined? | |

### Growth Chart

| Calculation | Description | Status | Questions | Implementation Notes |
|-------------|-------------|--------|-----------|----------------------|
| Yearly Cards | Calculate cards for each year | To Do | What's the range of years to display? | |
| Card Interpretations | Generate meanings for each card position | To Do | | |

## Next Steps

1. Start with the Birth Number calculation
2. Clarify how the birth number maps to Thoth deck cards
3. Implement the yearly card progression formula
4. Build out the remaining calculations in priority order
5. Review and update package.json keywords to optimize plugin discoverability in Community Plugins

## Questions for Discussion

- How are master numbers (11, 22, etc.) handled in the calculations?
- Is there a specific mapping from birth numbers to Thoth tarot cards?
- How are compound cards determined (when a birth number maps to multiple cards)?
- What is the formula for determining the yearly progression of cards?
- How far back and forward should the Growth Chart extend? 
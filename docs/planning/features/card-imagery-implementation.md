# Card Imagery Implementation Plan

## Overview

This document outlines the plan for implementing a hybrid approach to Tarot card imagery in the Obsidian Hermetic Compass plugin. The approach combines a custom icon font for UI elements with a detailed image set for rich card displays.

## Implementation Approach

### 1. Custom Icon Font

A custom font will be created with simplified, symbolic representations of each Tarot card for use in UI elements.

**Usage Contexts:**
- Navigation elements
- List items in the Growth Chart
- Small indicators
- Settings panels
- Any UI element where visual consistency with Obsidian's theming is important

**Technical Specifications:**
- SVG-based glyphs for crisp rendering at any size
- Monochrome design to inherit theme colors
- Unicode Private Use Area (PUA) mapping for each card
- Font formats: WOFF2 (primary), WOFF (fallback)

**Development Steps:**
1. Create simplified SVG representations of each card
2. Convert SVGs to font using a tool like IcoMoon or Fontello
3. Create CSS for font integration
4. Develop utility functions for displaying icons

> For detailed recommendations on font development tools and workflows, see [Font Development Tools](./font-development-tools.md).

### 2. Detailed Image Set

A collection of card images will be used for contexts where detailed visualization is important.

**Usage Contexts:**
- Card description modals
- Profile reports
- Detailed card explanations
- Places where visual richness matters

**Technical Specifications:**
- WebP format for optimal compression while maintaining quality
- Fallback JPG/PNG for older browsers if needed
- Multiple resolutions for different display contexts
- Lazy loading implementation for performance

**Development Steps:**
1. Prepare card images in appropriate formats and resolutions
2. Implement lazy loading mechanism
3. Create display components with proper fallbacks
4. Add caching mechanism to improve performance

### 3. Integration Strategy

**CSS Integration:**
```css
@font-face {
  font-family: 'tarot-icons';
  src: url('fonts/tarot-icons.woff2') format('woff2'),
       url('fonts/tarot-icons.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.ohcp-card-icon {
  font-family: 'tarot-icons';
  /* Additional styling */
}

/* Example icon classes */
.ohcp-card-icon-fool::before {
  content: '\e001';
}
```

**TypeScript Integration:**
```typescript
// Example utility function
export function getCardIcon(cardId: string): string {
  const iconMap: Record<string, string> = {
    'fool': '\ue001',
    'magus': '\ue002',
    // ...other cards
  };
  
  return iconMap[cardId] || '';
}
```

## User Customization

Allow users to substitute their own card images if desired:

1. Settings option to specify custom image directory
2. Fallback to default images if custom ones aren't available
3. Documentation on image naming conventions

## Accessibility Considerations

1. Alt text for all card images
2. Text alternatives for icon font characters
3. High contrast options for icon visibility

## Next Steps

1. Create simplified SVG representations of key cards
2. Develop proof-of-concept for font integration
3. Test image loading performance in Obsidian context
4. Implement lazy loading for detailed card views
5. Develop user settings for customization options 
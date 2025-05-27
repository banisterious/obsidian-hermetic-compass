# Font Development Tools

## Overview

This document provides recommendations for tools to develop the custom icon font for the Obsidian Hermetic Compass plugin. These tools will help transform tarot card designs into a functional icon font for use in the UI.

## Recommended Tools

### Web-Based Solutions

#### 1. IcoMoon App (https://icomoon.io/app/)

**Strengths:**
- Free for basic use
- Web-based (no installation required)
- Import SVGs directly
- Precise control over Unicode code point mapping
- Export as multiple formats (WOFF, WOFF2, TTF, EOT, SVG)
- Generate CSS and HTML for quick implementation
- Custom CSS selector naming

**Workflow:**
1. Export SVG icons from IconDeveloper
2. Upload to IcoMoon
3. Select desired icons
4. Assign Unicode code points (preferably in Private Use Area)
5. Generate and download font
6. Integrate into project

**Best for:** Quick development with minimal learning curve while maintaining good control.

#### 2. Fontello (https://fontello.com/)

**Strengths:**
- Free and open-source
- Simple drag-and-drop interface
- Good preview capabilities
- Batch processing
- CSS generation

**Limitations:**
- Less fine-grained control than IcoMoon
- Fewer customization options

**Best for:** Rapid prototyping and simple icon sets.

### Desktop Applications

#### 3. FontForge (https://fontforge.org/)

**Strengths:**
- Free, open-source, cross-platform
- Professional-grade font editor
- Complete control over every aspect of font creation
- Extensive glyph editing capabilities
- Script automation for batch processing
- Support for all font formats

**Limitations:**
- Steep learning curve
- Less intuitive interface
- Requires more technical knowledge

**Best for:** Maximum control and customization, especially for complex projects.

#### 4. Glyphs Mini (Mac only, $49.99)

**Strengths:**
- Intuitive, modern interface
- Excellent for SVG imports and editing
- Good balance of power and usability
- Professional output quality
- Regular updates and support

**Limitations:**
- Mac only
- Paid software
- Mini version has some limitations compared to full version

**Best for:** Mac users who want a more user-friendly alternative to FontForge.

## Integration with IconDeveloper

Since IconDeveloper (Stardock Software) is available for creating the initial icons, here's the recommended workflow:

1. **Design Phase:**
   - Create simplified tarot symbols in IconDeveloper
   - Keep designs clean and scalable
   - Maintain consistent visual language across all cards

2. **Export Phase:**
   - Export each icon as SVG format
   - Maintain consistent naming convention (e.g., `tarot-fool.svg`, `tarot-magician.svg`)
   - Ensure proper scaling and alignment within viewBox

3. **Font Creation Phase:**
   - Import SVGs into IcoMoon (recommended starting point)
   - Assign Unicode code points (e.g., starting at U+E000 in Private Use Area)
   - Generate font in WOFF2 and WOFF formats
   - Download package with CSS

4. **Integration Phase:**
   - Add font files to project's assets directory
   - Include CSS in styles.css
   - Create TypeScript utility functions for using icons

## Recommendation Summary

**Primary Recommendation: IcoMoon**
- Best balance of ease-of-use and control
- Ideal for web fonts
- Works well with SVGs from IconDeveloper
- No installation required

**Alternative for Maximum Control: FontForge**
- If more advanced font features are needed
- For extensive customization requirements
- When batch processing via scripts would be beneficial

## Resources

- IcoMoon App: https://icomoon.io/app/
- IcoMoon Documentation: https://icomoon.io/docs.html
- Fontello: https://fontello.com/
- FontForge: https://fontforge.org/
- FontForge Documentation: https://fontforge.org/docs/
- Glyphs Mini: https://glyphsapp.com/glyphs-mini

## Next Steps

1. Export a few test icons from IconDeveloper
2. Try IcoMoon to create a small test font
3. Implement in the plugin to verify proper rendering
4. Document the final workflow based on testing results 
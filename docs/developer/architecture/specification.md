# Project Document: Obsidian Hermetic Compass

## Table of Contents
- [1. Introduction & Project Vision](#1-introduction--project-vision)
  - [1.1. Overview](#11-overview)
  - [1.2. Core Purpose](#12-core-purpose)
  - [1.3. Guiding Philosophy](#13-guiding-philosophy)
- [2. User Profile & Workflow Integration](#2-user-profile--workflow-integration)
  - [Target User](#target-user)
  - [2.2. Existing Workflow](#22-existing-workflow)
  - [2.3. Tool Integration](#23-tool-integration)
- [3. Core Features & Functionality](#3-core-features--functionality)
  - [3.1. Tarot Profile Report Generation](#31-tarot-profile-report-generation)
  - [3.2. Tarot Growth Chart Display](#32-tarot-growth-chart-display)
  - [3.3. Detailed Card Description Viewer](#33-detailed-card-description-viewer)
  - [3.4. Visual & Data Asset Management](#34-visual--data-asset-management)
- [4. User Interface (UI) & User Experience (UX)](#4-user-interface-ui--user-experience-ux---conceptual-sketch)
  - [4.1. Main Interaction Points](#41-main-interaction-points)
  - [4.2. Profile Report](#42-profile-report-markdown-note)
  - [4.3. Growth Chart Modal/Sidebar View](#43-growth-chart-modalsidebar-view)
  - [4.4. Card Description Modal](#44-card-description-modal)
- [5. Technical Considerations](#5-technical-considerations)
  - [5.1. Platform](#51-platform)
  - [5.2. Implementation](#52-implementation)
  - [5.3. Core Technologies](#53-core-technologies)
  - [5.4. Data Persistence](#54-data-persistence)
  - [5.5. Privacy & PII Handling](#55-privacy--pii-personally-identifiable-information-handling)

## 1. Introduction & Project Vision

## 1.1. Overview

An advanced Obsidian tool designed for deep personal Tarot reflection and life path exploration, utilizing Angeles Arrien's methodologies and the symbolism of the Thoth Tarot deck.

## 1.2. Core Purpose

To empower the user to:

- Generate a comprehensive personal Tarot profile.
- Navigate a dynamic, personalized yearly Growth Chart.
- Integrate these Tarot insights seamlessly with their existing Obsidian-based journaling and reflection workflow.
- Create a rich, interactive, and visually engaging experience for personal development.

## 1.3. Guiding Philosophy

Rooted in Arrien's work, emphasizing self-understanding, archetypal exploration, and personal growth over deterministic prediction.

## 2. User Profile & Workflow Integration

## Target User

Primarily for the user themselves, leveraging their established knowledge of Arrien's system and the Thoth deck.

## 2.2. Existing Workflow

Hand-written journaling on Kindle Scribe -> Import to Obsidian -> Transcription -> Manual linking of journal entries to other vault notes.

## 2.3. Tool Integration

The Tarot tool will act as an on-demand reference and insight generator within Obsidian, providing rich, linkable Tarot data that complements and enhances the existing journaling and reflection process.

## 3. Core Features & Functionality

## 3.1. Tarot Profile Report Generation

- **Input:** User's Full Name, Date of Birth, Time of Birth (via Plugin Settings).
- **Calculations:** Numerology for Name Symbols; date-based logic for Birth Symbols (Lifetime Personality, Soul/Spiritual, Hidden Factor, Court Card); Major Path Placement; Corresponding Zodiac Symbol lookup.
- **Output:** On-demand generation of a single, comprehensive, well-structured Markdown note.
- **Visuals:** Embeds user-provided Thoth card images for relevant symbols. Card names link to detailed description notes.

## 3.2. Tarot Growth Chart Display

- **Calculations:** Dynamic, year-by-year "Personality Choice" card derivation (Birth Month + Birth Day + Current Year numerology, applying Arrien's reduction rules).
- **Display:** On-demand view within a dedicated, scrollable modal window or a sidebar leaf.
- **Content Per Year:** Age, Calendar Year, Personality Card (Name, corresponding user-provided Thoth card thumbnail image, *and custom icon/font character*), and calculated "Path" (derived from the "Spirit Choice" universal meanings).
- **Interaction:**
	- "Copy Markdown Link for this Year" button (formats a link like `[[GrowthChart_YYYY_CardName_Path]]` for easy pasting into journal entries).
	- Clicking on a card's name, image, or icon will trigger the display of its detailed description (see 3.3).

## 3.3. Detailed Card Description Viewer

- **Source Data:** User-created and maintained Markdown notes for each of the 78 Thoth Tarot cards (path to folder defined in Plugin Settings, e.g., `Tarot/Card Descriptions/Thoth - 00 - The Fool.md`).
- **Access:** Triggered by clicking a card representation in the Profile Report or the Growth Chart view.
- **Display:** A dedicated, sophisticated modal window. This modal will allow navigation (e.g., tabs, searchable list, or direct jump) to view the content of the selected card's Markdown description note.

## 3.4. Visual & Data Asset Management

- **Thoth Card Images:**
    - **Source:** User-provided raster images (e.g., PNGs from scans).
    - **Storage:** Stored in a user-specified folder path within their vault (configurable in Plugin Settings).
    - **Naming Convention:** User-defined, consistent convention required (e.g., `Tarot-00-The-Fool.png`).
    - **Copyright:** Plugin will *not* distribute copyrighted images. Functionality relies on user-provided images for personal use.
- **Custom Icons/Font Set (Must-Have):**
    - **Source:** A set of 78 icons (individual image files like SVG/PNG, or a custom icon font file like WOFF2/TTF) representing each card. To be created/sourced by the user.
    - **Storage:** Stored in a user-specified folder path or potentially within the plugin's assets if user provides them for that purpose and licensing allows. Configurable in Plugin Settings.
    - **Usage:** Displayed in the Growth Chart view for enhanced visual appeal.
- **Card Description Note Template:**
    - **Purpose:** To ensure consistency and ease of content creation for the 78 Thoth card description Markdown notes.
    - **Recommendation:** User to create a Markdown template (e.g., accessible via Obsidian's Templater plugin or core templates).
    - **Suggested Template Structure (Example):**
        ```markdown
        ---
        aliases: [Card Alias 1, Card Alias 2]
        tags: [tarot, thoth, major_arcana/minor_arcana/court_card, suit_if_applicable]
        number: XX
        thoth_image: "![[path_to_image_folder/Tarot-XX-CardName.png]]" 
        ---
        # {{Card Name}} (e.g., The Fool)

        ![[{{thoth_image}}]] 

        ## Keywords
        - Keyword 1
        - Keyword 2

        ## Symbolism (from various sources, including Crowley)
        - Detail 1
        - Detail 2

        ## Arrien's Interpretation (from "The Tarot Handbook")
        - Paragraph or bullet points.

        ## General Meanings / Core Essence
        - 

        ## Personal Reflections & Associations
        - 

        ## Journal Links (example of manual or future automated links)
        - [[YYYY-MM-DD Journal Entry where this card was relevant]]
        ```
    - **Integration:** The "Detailed Card Description Viewer" (Feature 3.3) will display the content rendered from these user-created notes.
- "Spirit Choice" Data (Universal Paths):
    - **Source:** Based on Angeles Arrien's system.
    - **Storage:** Likely an internal JSON file or a Markdown table within the plugin's assets, defining the universal "Path" for each Major Arcana card. Should be updateable if necessary, though core Arrien interpretations are stable.

## 4. User Interface (UI) & User Experience (UX) - Conceptual Sketch

## 4.1. Main Interaction Points
- Command Palette activation for primary functions (e.g., "Tarot: View Growth Chart," "Tarot: Generate Profile Report").
- Ribbon Buttons (Optional, for quick access to key functions).
- Modal Navigator for the Detailed Card Description Viewer (allowing selection of cards via tabs, list, etc.).
- Dedicated Plugin Settings tab in Obsidian's settings area.

## 4.2. Profile Report (Markdown Note)
- Clean, readable, and well-structured Markdown using headings, lists, and embedded images.
- Clear headings for different symbol sections.

## 4.3. Growth Chart Modal/Sidebar View
- Yearly entries presented in a clear, scrollable list or virtualized table format (for performance with many years).
- Easy navigation (e.g., jump to year, scroll).
- Intuitive visual hierarchy: Card Image Thumbnail, Custom Icon, Card Name, Path.
- "Copy Link for this Year" button easily accessible for the currently focused or selected year.

## 4.4. Card Description Modal
- Navigation elements (e.g., tabs for suits/Majors, a searchable dropdown, or an A-Z list) for selecting a card.
- Content area that faithfully renders Markdown from the selected description note (including headings, lists, images, etc.).
- Clear "Close" or "Back to Chart" functionality.

## 5. Technical Considerations

## 5.1. Platform
- Obsidian Desktop (Windows, macOS, Linux). Mobile compatibility would be a V2+ consideration.

## 5.2. Implementation
- Custom Obsidian plugin.

## 5.3. Core Technologies
- JavaScript (ES6+ modules).
- Obsidian API (Plugin API, Workspace API for leaves/modals, Vault API for notes/files, Settings API).
- HTML & CSS for custom views and modals.
- (Consider Svelte or similar for building the reactive UI components within modals if complexity warrants).

## 5.4. Data Persistence
- User birth data and configuration paths stored via Plugin Settings (see 5.6).
- Generated Profile Report is a Markdown file in the vault.
- Growth Chart and Card Descriptions are dynamically rendered from source data/notes.

## 5.5. Privacy & PII (Personally Identifiable Information) Handling
- **PII Stored:** The plugin will store the following PII as entered by the user: Full Name, Date of Birth, and Time of Birth.
- **Storage Location:** All PII and user-specific configuration data are stored locally within the user's Obsidian vault, specifically within the plugin's settings file (typically `data.json` in the plugin's directory in `.obsidian/plugins/`).
- **No External Transmission:** The plugin will operate entirely locally. No PII or any other user data will be transmitted to external servers, third parties, or the internet by the plugin.
- **User Control & Responsibility:** The PII remains under the full control of the user within their local vault. The security of the Obsidian
# Numerology Calculation Implementation

## Table of Contents
- [1. Introduction](#1-introduction)
  - [1.1. Purpose](#11-purpose)
  - [1.2. Scope](#12-scope)
- [2. Calculation Requirements](#2-calculation-requirements)
  - [2.1. Name Symbols](#21-name-symbols)
  - [2.2. Birth Symbols](#22-birth-symbols)
  - [2.3. Personality Choice Cards](#23-personality-choice-cards)
- [3. Implementation Details](#3-implementation-details)
  - [3.1. Name Symbol Algorithm](#31-name-symbol-algorithm)
  - [3.2. Birth Symbol Algorithms](#32-birth-symbol-algorithms)
  - [3.3. Personality Choice Algorithm](#33-personality-choice-algorithm)
  - [3.4. Reduction Rules](#34-reduction-rules)
- [4. Edge Cases and Error Handling](#4-edge-cases-and-error-handling)
  - [4.1. Input Validation](#41-input-validation)
  - [4.2. Special Numerological Cases](#42-special-numerological-cases)
  - [4.3. Error Messages](#43-error-messages)
- [5. Performance Considerations](#5-performance-considerations)
- [6. Testing Strategy](#6-testing-strategy)

## 1. Introduction

### 1.1. Purpose

This document provides implementation details for the numerological calculations used in the Obsidian Hermetic Compass plugin. These calculations are core to generating a user's Tarot profile and Growth Chart according to Angeles Arrien's methodologies.

### 1.2. Scope

This implementation guide covers algorithms for calculating:
- Name Symbols through numerology
- Birth Symbols derived from date of birth
- Yearly "Personality Choice" cards for the Growth Chart
- The reduction rules that apply to these calculations

## 2. Calculation Requirements

### 2.1. Name Symbols

The system must calculate numerological values from the user's full name to determine corresponding Tarot cards.

- **Input**: User's full name (first, middle, last)
- **Output**: Corresponding Tarot cards from the Thoth deck
- **Process**: Letters are converted to numbers, summed, and reduced according to Arrien's system

### 2.2. Birth Symbols

Several symbols must be calculated from the user's date of birth:

- **Lifetime Personality**: Derived from birth month and day
- **Soul/Spiritual**: Derived from birth date components
- **Hidden Factor**: Derived from birth date components
- **Court Card**: Derived from birth date components

### 2.3. Personality Choice Cards

For each year of the user's life, a "Personality Choice" card must be calculated:

- **Input**: Birth month, birth day, and current year
- **Output**: A Major Arcana card for the year and corresponding "Path"
- **Process**: Numerologically add birth month + birth day + current year, then apply reduction rules

## 3. Implementation Details

### 3.1. Name Symbol Algorithm

```javascript
// Convert letters to numbers according to Arrien's system
function letterToNumber(letter) {
    const letterMap = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
        'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
        's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
    };
    return letterMap[letter.toLowerCase()] || 0;
}

// Calculate name number and corresponding Tarot card
function calculateNameSymbol(fullName) {
    // Remove spaces and special characters
    const cleanName = fullName.replace(/[^a-zA-Z]/g, '');
    
    // Convert to number values and sum
    let sum = 0;
    for (const letter of cleanName) {
        sum += letterToNumber(letter);
    }
    
    // Apply reduction rules (see section 3.4)
    const reducedNumber = reduceNumber(sum);
    
    // Map to corresponding Tarot card
    return mapNumberToTarotCard(reducedNumber);
}
```

### 3.2. Birth Symbol Algorithms

```javascript
// Calculate Lifetime Personality from birth month and day
function calculateLifetimePersonality(birthMonth, birthDay) {
    const sum = birthMonth + birthDay;
    const reducedNumber = reduceNumber(sum);
    return mapNumberToTarotCard(reducedNumber);
}

// Calculate Soul/Spiritual card
function calculateSoulCard(birthMonth, birthDay, birthYear) {
    // Implementation depends on specific Arrien calculation
    // Example placeholder implementation
    const sum = birthMonth + birthDay + reduceNumber(birthYear);
    const reducedNumber = reduceNumber(sum);
    return mapNumberToTarotCard(reducedNumber);
}

// Calculate Hidden Factor card
function calculateHiddenFactor(birthMonth, birthDay, birthYear) {
    // Implementation depends on specific Arrien calculation
    // Example placeholder implementation
    const lifetimeNum = reduceNumber(birthMonth + birthDay);
    const soulNum = reduceNumber(birthMonth + birthDay + reduceNumber(birthYear));
    const sum = lifetimeNum + soulNum;
    const reducedNumber = reduceNumber(sum);
    return mapNumberToTarotCard(reducedNumber);
}

// Calculate Court Card
function calculateCourtCard(birthMonth, birthDay, birthYear) {
    // Implementation depends on specific Arrien methodology
    // Example placeholder implementation
    // This would use zodiac mapping or other method
}
```

### 3.3. Personality Choice Algorithm

```javascript
// Calculate yearly Personality Choice card
function calculatePersonalityChoice(birthMonth, birthDay, currentYear) {
    const sum = birthMonth + birthDay + reduceNumber(currentYear);
    const reducedNumber = reduceNumber(sum);
    return {
        card: mapNumberToTarotCard(reducedNumber),
        path: mapNumberToPath(reducedNumber)
    };
}

// Generate Growth Chart for a range of years
function generateGrowthChart(birthMonth, birthDay, birthYear, endYear) {
    const chart = [];
    const startYear = birthYear;
    
    for (let year = startYear; year <= endYear; year++) {
        const age = year - birthYear;
        const personalityChoice = calculatePersonalityChoice(birthMonth, birthDay, year);
        
        chart.push({
            age,
            year,
            personalityCard: personalityChoice.card,
            path: personalityChoice.path
        });
    }
    
    return chart;
}
```

### 3.4. Reduction Rules

According to Arrien's system, numbers are reduced as follows:

```javascript
function reduceNumber(number) {
    // Continue reducing until we get a number 1-22
    while (number > 22) {
        // Convert to string to sum digits
        const digits = number.toString().split('');
        number = digits.reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    }
    
    // Handle special cases for Master Numbers
    if (number === 11 || number === 22) {
        return number;
    }
    
    // For numbers still above 10, reduce once more
    if (number > 10) {
        const digits = number.toString().split('');
        number = digits.reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    }
    
    return number;
}

function mapNumberToTarotCard(number) {
    // Map reduced number to corresponding Major Arcana card
    const cardMap = {
        1: "The Magician",
        2: "The High Priestess",
        // ... map all 22 Major Arcana cards
        22: "The Fool"
    };
    
    return cardMap[number] || "Invalid Card";
}

function mapNumberToPath(number) {
    // Map to corresponding "Path" from Arrien's system
    const pathMap = {
        1: "Path of Focused Consciousness",
        2: "Path of Intuitive Awareness",
        // ... map all 22 paths
        22: "Path of Spontaneity"
    };
    
    return pathMap[number] || "Unknown Path";
}
```

## 4. Edge Cases and Error Handling

### 4.1. Input Validation

- Validate that name contains only alphabetic characters and spaces
- Ensure birth date is valid (check month/day ranges)
- Handle missing middle names
- Validate that birth year is realistic (e.g., not future date)

### 4.2. Special Numerological Cases

- Handle master numbers (11, 22) according to Arrien's system
- Account for cultural name variations (diacritical marks, non-Latin characters)
- Consider hyphenated names and name prefixes/suffixes

### 4.3. Error Messages

Provide clear, user-friendly error messages for invalid inputs:

- "Please enter a valid name containing only letters"
- "Birth date is invalid. Please enter a valid date."
- "Future birth dates are not valid. Please check the year."

## 5. Performance Considerations

- Cache calculation results where appropriate
- For Growth Chart generation, use lazy loading for very long time spans
- Consider performance impact of complex reduction rules

## 6. Testing Strategy

- Unit test each calculation function with known inputs/outputs
- Test edge cases (master numbers, unusual names)
- Validate against known examples from Arrien's work
- Performance test the Growth Chart generation with long date ranges 
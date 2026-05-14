# Project Blueprint

## Overview

This document outlines the design, features, and implementation plan for the "Toto Random Number Generator" web application. The goal is to create a simple, user-friendly tool for generating sets of random numbers for Toto.

## Current State

The project is a fully functional Toto number generator with a modern, responsive UI and support for Day/Night themes.

## Plan

### Phase 1: Core Functionality (Completed)

*   **Implement a Toto Number Generator:**
    *   Create a custom web component, `<toto-generator>`.
    *   The component displays a set of 6 unique random numbers from 1 to 49.
    *   A "Generate" button triggers the generation of a new set of numbers.
*   **Enhance User Interface:**
    *   Styled with a clean and modern design using CSS variables.
    *   Animated number circles for a polished feel.

### Phase 2: Theme Support (Completed)

*   **Implement Day/Night Modes:**
    *   Refactored CSS to use variables for all colors.
    *   Added a theme toggle button with icon updates.
    *   Persist user preference using `localStorage`.

### Phase 3: Advanced Features (Future)

*   **Number Range Selection:** Allow users to specify a minimum and maximum range for the random number.
*   **History:** Keep a list of previously generated numbers.
*   **Copy to Clipboard:** Allow users to easily copy the generated numbers.

## Implemented Features

### **Initial Setup**

*   `index.html`: Basic HTML structure.
*   `style.css`: Basic styling.
*   `main.js`: Empty JavaScript file.

### **V1: Toto Number Generator**

*   **`toto-generator` Web Component:**
    *   Displays 6 unique random numbers.
    *   Includes a "Generate" button.
*   **Styling:**
    *   Modern design with a dark theme.
    *   Responsive layout.

### **V2: Day/Night Versions**

*   **Theming System:**
    *   Uses CSS custom properties (variables) for dynamic color switching.
    *   `.light-mode` class provides the "Day" theme overrides.
*   **Theme Toggle UI:**
    *   Floating button in the top-right corner.
    *   Toggles between Sun (☀️) and Moon (🌙) icons.
*   **Persistence:**
    *   Automatically remembers the user's last selected theme using `localStorage`.
*   **Component Adaptation:**
    *   The `toto-generator` component consumes global CSS variables to match the active theme.

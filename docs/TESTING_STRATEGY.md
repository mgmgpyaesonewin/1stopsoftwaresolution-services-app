# Test Implementation Plan

This document outlines the strategic plan for implementing the unit and integration testing suite for the application. It is a direct response to the "Missing Test Suite" issue identified in the `APP_REVIEW.md`.

The primary goal is to build a robust safety net that verifies application behavior, prevents regressions, and increases developer confidence.

**Testing Stack:**

- **Framework:** Vitest
- **DOM Testing:** React Testing Library
- **Assertions:** Vitest (`expect`) + `@testing-library/jest-dom`

---

## Phase 1: Setup & Critical Flow Testing (Priority: Highest)

This phase focuses on establishing the testing environment and immediately covering the most critical user interaction point: the contact form.

### Task 1: Environment Setup

1.  **Install Dependencies:**
    ```bash
    pnpm add -D vitest jsdom @vitest/ui @testing-library/react @testing-library/jest-dom
    ```
2.  **Configure Vitest:** Create a `vitest.config.ts` file in the project root to configure the testing environment, including setting up React Testing Library and path aliases (`@/*`).
3.  **Update `package.json`:** Add the following scripts:
    ```json
    "scripts": {
      "test": "vitest",
      "test:ui": "vitest --ui"
    }
    ```
4.  **Update `tsconfig.json`:** Add `"vitest/globals"` to the `compilerOptions.types` array to provide global type definitions for Vitest APIs.

### Task 2: Integration Test - Contact Form

This is the highest-priority test, as it involves user input, validation, and a server-side mutation (Server Action).

- **Target File:** `app/(marketing)/contact/page.tsx`
- **Mocking:** The `sendContactEmail` server action will need to be mocked to simulate success and error states without making actual network requests.

- **Test Cases:**
  1.  **Render Test:**
      - `it('should render the contact form with all fields and a submit button')`
  2.  **Client-Side Validation:**
      - `it('should show required field errors if the form is submitted empty')`
      - `it('should show an invalid email error for a poorly formatted email address')`
      - `it('should disable the submit button while the form is submitting')`
  3.  **Success Scenario:**
      - `it('should call the sendContactEmail server action with correct data upon valid submission')`
      - `it('should display a success message after a successful submission')`
      - `it('should clear the form fields after a successful submission')`
  4.  **Error Scenario:**
      - `it('should display an error message if the server action returns an error')`
      - `it('should not clear the form fields if the submission fails')`

---

## Phase 2: Core Logic & Reusable Code (Priority: High)

This phase focuses on testing the foundational pieces of the application that are widely used, where a single bug could have a large blast radius.

### Task 3: Unit Test - Utility Functions

- **Target File:** `lib/utils.ts`
- **Test Cases for `cn`:**
  1.  `it('should merge multiple class names into one string')`
  2.  `it('should correctly handle conditional (falsy) classes')`
  3.  `it('should override conflicting tailwind classes correctly (e.g., p-2 and p-4 should result in p-4)')`

### Task 4: Unit Test - Custom Hooks

- **Target File:** `hooks/use-mobile.ts`
- **Test Cases:**
  1.  `it('should return true if window width is less than the breakpoint')`
  2.  `it('should return false if window width is greater than the breakpoint')`
  3.  `it('should update the value when the window is resized (requires mocking window resize events)')`

### Task 5: Unit Test - UI Components

Start with the most fundamental building blocks from `components/ui`.

- **Target File:** `components/ui/button.tsx`
- **Test Cases:**
  1.  `it('should render a button with the correct children')`
  2.  `it('should call the onClick handler when clicked')`
  3.  `it('should not call onClick when disabled')`
  4.  `it('should correctly apply variant and size classes')`

---

## Phase 3: Shared Components & Static Sections (Priority: Medium)

This phase covers components that are less critical than core logic but are important for the overall user experience.

### Task 6: Unit Test - Shared Components

- **Target File:** `components/shared/theme-toggle.tsx`
- **Mocking:** Requires mocking the `useTheme` hook from `next-themes`.
- **Test Cases:**
  1.  `it('should render two buttons for light and dark modes')`
  2.  `it('should call setTheme("light") when the light mode button is clicked')`
  3.  `it('should call setTheme("dark") when the dark mode button is clicked')`

- **Target File:** `components/shared/image-with-fallback.tsx`
- **Test Cases:**
  1.  `it('should render the next/image component with the correct src')`
  2.  `it('should display the fallback image if the primary image fails to load')` (Requires triggering the `onError` event).

### Task 7: Snapshot/Rendering Tests - Static Components

For components that are mostly static, a simple rendering or snapshot test is sufficient to detect unexpected changes.

- **Target File:** `components/layout/footer.tsx`
- **Test Cases:**
  1.  `it('should render the footer with correct navigation links and copyright text')`
  2.  `it('should match the snapshot')`

- **Target File:** `components/sections/hero-section.tsx`
- **Test Cases:**
  1.  `it('should render the main heading, paragraph, and call-to-action buttons')`
  2.  `it('should match the snapshot')`

---

## Next Steps

1.  **CI Integration:** After Phase 1 is complete, update the `.github/workflows/ci.yml` file to include a `pnpm test` step. This will ensure that no new code is merged without passing tests.
2.  **E2E Planning:** Once a baseline of unit/integration test coverage is established, begin planning for end-to-end (E2E) tests using Playwright to cover complete user journeys across multiple pages.

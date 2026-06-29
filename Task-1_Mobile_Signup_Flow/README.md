# FlowSphere Onboarding Experience & Design System

A premium, comprehensive, high-fidelity UI/UX mobile onboarding design kit and case study presentation for **FlowSphere**—a fictional modern SaaS productivity application. The project structures onboarding screens, a unified design system page, component states, and a visual portfolio Case Study designed to optimize customer acquisition and minimize onboarding drop-offs.

---

## Figma Design Link

Access the complete Figma design file here:
👉 **[Figma Project File](https://www.figma.com/design/F7fBowz7kiVxKLdu0F0YN4/Untitled?node-id=0-1&t=flvJVzkQQLDP1Di3-1)**

---

## Project Overview

Productivity platforms depend heavily on onboarding retention. Complex inputs, cryptic password requirements, and slow SMS verifications frequently trigger signup drops. 

FlowSphere tackles onboarding friction through a light-theme, AAA-contrast visual framework. It guides the user from splash loading to interests customization using progress indicators, autofilling OTP caret inputs, and clipboard paste actions—concluding in a HTML5 success celebration.

---

## Features

*   **Pulsing Brand Splash:** Animated logo with automated loading indicator lines to establish product trust.
*   **OAuth Social Logins:** Continue with Google, Apple, or custom Email integrations.
*   **Create Account Verification:** Active password strength scoring with confirmation checkers and visual format validations.
*   **Autojumping OTP Fields:** Caret jumps focus to the next numeric input automatically.
*   **Paste Clipboard shortcut:** Single-click copy paste code actions.
*   **Searchable Interest Chips:** Dynamic filtering that unlocks CTAs once a minimum selection target is reached.
*   **Interactive Success Celebration:** HTML5 canvas physics confetti burst on boarding completion.

---

## Design Process (UX Case Study)

Our design follows a user-centered UX research structure:
1.  **Overview & Challenge:** Tackling onboarding drop-offs (currently averaging 35% on standard registration forms).
2.  **Problem Statement:** Addressing OTP copying fatigue, password complexity confusion, and setup step opacity.
3.  **Persona Mapping:** Designing around target personas (Alex Rivera - Tech Freelancer) who demand immediate tool syncs.
4.  **Wireframing & Flows:** Mapping low-fidelity wireframe layouts and progress states before visual rendering.
5.  **Projected Impact:** Metrics indicate a +45% signup completion rate and a -60% reduction in average onboarding times.

---

## Screens

The flow features 7 high-fidelity frames:
*   **Screen 1: Splash** – App title, tagline, loader animations, and logo icons.
*   **Screen 2: Welcome** – Illustrative desktop layouts, social sign-ins, and Terms link bars.
*   **Screen 3: Create Account** - Avatar upload frames, name/phone inputs, password strength bars, and password confirmation checking.
*   **Screen 4: OTP Verification** - Security lock badge, countdown resend timers, and paste shortcuts.
*   **Screen 5: Profile Setup** - Username selections, birthday selectors, gender selector pills, and country select dropdowns with Skip button options.
*   **Screen 6: Choose Interests** - Searchable interests chips with emoji indicators.
*   **Screen 7: Success** - Congratulatory checked graphics, sync status toasts, and Dual CTAs.

---

## Design System Specifications

*   **Color Palette:** Accessible Indigo Primary (`#6366F1`), Purple Secondary (`#8B5CF6`), and Background light neutrals (`#F8FAFC`).
*   **Typography Scale:** Using **Inter** sans-serif font family:
    *   Heading: 28px Bold
    *   Title: 22px SemiBold
    *   Body: 16px Regular
    *   Caption: 13px Medium
    *   Button: 16px SemiBold
*   **Elevation System:** Soft card shadows (L1), floating element elevations (L2), and primary active button glows.
*   **Border Radius:** Curvature standards mapping 8px (small elements), 12px (text inputs), 16px (CTA buttons), and 20px (mobile canvas boundaries).
*   **Column Grid:** 4-Column fluid mobile grid layouts with 24px margins and 16px gutters.

---

## Prototype Connections

Prototype wires are configured for Figma Smart Animate:
```text
Splash ──(Auto-timer)──> Welcome ──(Tap Email)──> Sign Up ──(Tap Create)──> OTP ──(Verify)──> Profile Setup ──(Continue)──> Interests ──(Finish)──> Success
```

---

## Technologies Used

*   **Figma** (UI/UX Canvas Design & Layouts)
*   **HTML5 & CSS3** (Interactive simulator browser dashboard)
*   **Javascript (ES6)** (Simulator states, filters, and confetti physics)
*   **Node.js** (REST API download scripts & local server runner)

---

## Folder Structure

The repository is organized under the following layout:
```text
CODSOFT-UIUX/
├── README.md             # Project documentation (this file)
├── LICENSE               # MIT License
├── .gitignore            # Git ignore properties
├── Screenshots/          # High-quality exported PNG screens
│   ├── Splash.png
│   ├── Welcome.png
│   └── ...
├── Assets/               # Vector SVG assets
│   ├── Splash.svg
│   ├── Welcome.svg
│   └── ...
├── Prototype/            # Prototype connections and flows mapping
├── Design-System/        # Design system grids, colors, and shadows specifications
└── Figma/                # Reference links to active Figma projects
    └── figma_link.txt
```

---

## Internship Details

*   **Organization:** CodSoft
*   **Domain:** UI/UX Design
*   **Task Number:** Task 1 (Mobile Authentication Flow & Design System)
*   **Status:** Completed

---

## Credits

Designed and structured for GitHub submission by:
*   **Noor Mohamed Halith** (UI/UX Design Intern)

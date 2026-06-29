# GreenLife Café — Figma Import Specifications

This document guides you on how to import and set up the generated vector assets into Figma, configuring layouts, components, and prototype interactions.

---

## 📥 How to Import into Figma

1. **Create a New Figma File:** Open Figma and create a blank draft.
2. **Drag and Drop SVGs:** 
   - Drag all individual `Frame-*.svg` files from `Figma/` directly onto your Figma canvas to place the standalone screens.
   - Drag all `Page-*.svg` files from `Figma/` to construct your case study presentation pages.
3. **Editable Layers:** Every imported SVG converts into fully editable vector shapes, texts, and gradient backgrounds.
4. **Link Typography:** Ensure you have the **Poppins** and **Inter** font families loaded from Google Fonts (or installed locally) to render titles and details.

---

## 📐 Frame Dimensions Reference

| Frame / Page | Dimensions | Device Template | Purpose |
|--------------|------------|-----------------|---------|
| **Frame-01 to Frame-10** | 375 x 812 px | iPhone 13/14 mini | High-fidelity UI layouts |
| **Frame-11 to Frame-14** | 600 x 400 px | Custom Sheet | Component & System specs |
| **Page-01 to Page-16** | 1440 x 900 px | Presentation Slide | Portfolio Case Study deck |

---

## ⚡ Figma Prototype Setup Instructions

To map the interactive wires as illustrated on Page 15:
- **Cover Screen -> About Story:**
  - Select the "Start Exploring" button.
  - Wire to `Frame-02-About.svg`.
  - Trigger: `On Tap`.
  - Action: `Navigate To`.
  - Transition: `Smart Animate` (Ease Out, 350ms).
- **About Story -> Menu Categories:**
  - Select the "Explore Menu" button.
  - Wire to `Frame-03-Categories.svg`.
  - Transition: `Slide In` (Left to Right, 300ms).
- **Categories Grid -> Food List:**
  - Wire "Healthy Salads" card to `Frame-04-Salads.svg`.
  - Wire "Gourmet Burgers" card to `Frame-05-Burgers.svg`.
- **Food List -> Add Cart overlay:**
  - Select the `+` button on a card.
  - Wire to show `Cart Drawer` as an `Overlay` slide-up from bottom.
- **Reservation Form -> Success Screen:**
  - Wire "Book Table" button to `Frame-10-Booking-Success.svg`.
  - Transition: `Instant` or `Dissolve` (300ms).

---

*Figma Import Spec Guidelines · GreenLife Café*

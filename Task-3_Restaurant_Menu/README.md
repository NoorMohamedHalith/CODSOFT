# GreenLife Café — Premium Restaurant Menu UI/UX Design System & Case Study

<div align="center">

![Task 3](https://img.shields.io/badge/CODSOFT-Task%203-6366F1?style=for-the-badge&logo=figma)
![Status](https://img.shields.io/badge/Status-Completed-22C55E?style=for-the-badge)
![A11Y](https://img.shields.io/badge/A11Y-WCAG%20AA-success?style=for-the-badge)
![Figma](https://img.shields.io/badge/Tool-Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

**A high-fidelity nature-inspired restaurant mobile menu app concept for GreenLife Café. Built with fluid layouts, interactive components, token-based design system, and full UX case study presentation slides.**

[🌐 View Case Study](./Case-Study/case-study.md) · [📱 Launch Interactive Prototype](./prototype.html) · [🎨 Figma Specs](./Figma/figma-specs.md)

</div>

---

## 🚀 Interactive Prototype

The project includes an interactive **mobile app simulator** to preview the full browse-to-order flow, complete with cart adjustments and table reservation.

👉 **[Launch Interactive Prototype Simulator](./prototype.html)**

### Interactive Flow Features:
- **Hotspot Indicators Toggle:** Quickly highlight interactive regions with orange glowing guides.
- **Side Panel Step Controller:** Jump directly to any of the 10 screen states of the simulation.
- **In-Memory Cart Manager:** Add food items to cart, adjust quantities, and calculate subtotal/tax in real-time.
- **Slide-up Cart Drawer:** Smooth bottom panel overlay showing selected preorder summary.
- **Interactive Reservation Form:** Name, phone validation, guest select dropdowns, and date picker inputs.
- **Booking Success Celebration:** Instant booking receipt card generation and canvas-based confetti physics burst.

---

## 📁 16-Page Figma SVG Case Study Presentation

Each slide of the widescreen portfolio deck is generated as a separate vector SVG with structured grouping layers for easy drag-and-drop import into Figma:

1. **[01 - Cover](./Figma/Page-01-Cover.svg):** Portfolio presentation page cover.
2. **[02 - Overview](./Figma/Page-02-About-GreenLife.svg):** Culinary story, mission, and chef introduction.
3. **[03 - Categories Grid](./Figma/Page-03-Menu-Categories.svg):** 2-column visual category card layouts.
4. **[04 - Healthy Salads](./Figma/Page-04-Salads-Category.svg):** Salad cards with calorie badges and veg dot indicators.
5. **[05 - Gourmet Burgers](./Figma/Page-05-Burgers-Category.svg):** Gourmet plant-based burger cards.
6. **[06 - Wood-Fired Pizza](./Figma/Page-06-Pizza-Category.svg):** Sourdough pizza grids with rating metrics.
7. **[07 - Juices & Drinks](./Figma/Page-07-Drinks-Category.svg):** Cold-pressed detox juices and tropical smoothies.
8. **[08 - Desserts](./Figma/Page-08-Desserts-Category.svg):** Chia puddings and tarts details.
9. **[09 - Reservation Form](./Figma/Page-09-Reservation-Form.svg):** Table booking input fields.
10. **[10 - Booking Success](./Figma/Page-10-Booking-Success.svg):** Booking receipt confirmation card with unique ID.
11. **[11 - Component Sheet](./Figma/Page-11-Components-Library.svg):** Standard buttons, rating badges, search inputs.
12. **[12 - Variant Grid](./Figma/Page-12-Variants-Grid.svg):** Interactive component states (Default, Hover, Pressed, Disabled).
13. **[13 - Tokens System](./Figma/Page-13-Design-System-Spec.svg):** Hex colors palette, spacing scale, typographic hierarchy.
14. **[14 - Brand Assets](./Figma/Page-14-Brand-Assets.svg):** Minimalism green leaf logo and interface vector icons.
15. **[15 - Prototype Connections](./Figma/Page-15-Prototype-Wires.svg):** Dashed hotspot connector paths flow diagram.
16. **[16 - Case Study Summary](./Figma/Page-16-Case-Study-Presentation.svg):** Problem statement, goals, SarahJenkins persona, and competitive analysis matrix.

---

## 🎨 Design System & Accessibility

Tokens are defined inside [`styles.css`](./styles.css) and [`Design-System/design-tokens.json`](./Design-System/design-tokens.json):
- **Dominant Cream Background:** `#FFF8E7`
- **Primary Forest Green:** `#2E7D32`
- **Secondary Leaf Green:** `#81C784`
- **Accent Orange:** `#FF9800`
- **A11Y AAA Compliance:** Text-to-surface contrast ratio measures 10.4:1 (exceeds WCAG minimum 4.5:1).
- **Tap Targets:** Optimized to 48x48px sizes to prevent touch errors.

---

## 📂 Project Structure

```
Task-3_Restaurant_Menu/
├── README.md                      # This file
├── styles.css                     # Design tokens & simulator CSS
├── prototype.html                 # Interactive mobile app simulator
├── generate-figma-svgs.js         # Node script for standalone UI screens
├── generate-figma-case-study.js   # Node script for case study widescreen pages
│
├── Case-Study/
│   └── case-study.md              # In-depth UX Case Study
│
├── Design-System/
│   └── design-tokens.json         # Spacing, colors, and typography JSON
│
├── Figma/                         # 16 Widescreen Case Study slides & standalone UI frames
│   ├── Page-01-Cover.svg
│   ├── Frame-01-Cover.svg
│   ├── figma-specs.md
│   └── ...
│
├── Prototype/
│   └── prototype-flow.md          # Flow Spec mapping
│
└── Screenshots/                   # High-quality PNG previews
    ├── home.png
    ├── menu.png
    ├── item_detail.png
    ├── cart.png
    └── checkout.png
```

---

## ⚙️ How to View Locally

1. **Interactive Prototype:** Open [`prototype.html`](./prototype.html) directly inside your web browser.
2. **Figma SVGs:** Drag and drop any SVG from `Figma/` directly into your Figma editor canvas.
3. **Run SVG Generators:** Execute `node generate-figma-svgs.js` and `node generate-figma-case-study.js` to regenerate vector files.

---

*CODSOFT UI/UX Internship — Task 3*  
*Designed by: Noor Mohamed Halith*

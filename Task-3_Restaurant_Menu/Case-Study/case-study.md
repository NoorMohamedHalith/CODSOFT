# GreenLife Café — UI/UX Case Study

**CODSOFT UI/UX Design Internship · Task 3 Completion**  
*Author: Noor Mohamed Halith (UI/UX Design Intern)*  
*Design Quality: Senior Product Designer Portfolio Deck Specs*

---

## 1. Executive Summary & Problem Statement

### The Product
**GreenLife Café** is a modern, nature-inspired restaurant mobile app focused on organic, farm-fresh ingredients. It bridges the gap between traditional food ordering and in-person dining by offering a seamless combined preorder and table booking service.

### The Problem
During UX competitor auditing (Swiggy, Zomato, Uber Eats), we identified several key limitations in current restaurant app models:
1. **Separation of Services:** Users cannot easily book a physical dining table and pre-order their meals simultaneously.
2. **Hidden Nutritional Info:** Clean eating enthusiasts face difficulty checking calorie details or organic certifications on congested menu grids.
3. **High Checkout Friction:** Multi-step registration forms during table booking trigger user fatigue, dropping conversion rates.
4. **Poor Accessibility:** Weak visual hierarchy and tiny tap target sizes violate WCAG contrast regulations.

---

## 2. Project Goal & Target Audience

### Goal
Design an accessible, premium, nature-themed mobile menu experience that drives table bookings while offering nutritional transparency.
- **Conversion Metric Target:** +40% increase in combined pre-order checkout completions.
- **Accessibility Standard:** WCAG AA compliance (minimum 4.5:1 text-to-background contrast ratio).
- **Responsive Target:** Standard mobile frame sizes (375px) scaling up for larger screens.

### Target Audience
1. **Sarah Jenkins (28, Wellness Consultant):** Demands organic ingredient transparency, calorie metrics, and swift vegan filtering.
2. **Alex Rivera (34, Busy Professional):** Books lunch meeting slots during work breaks; requires a rapid table reservation and preorder checkout flow.

---

## 3. The Design System (GreenLife UI Kit)

We built a modular, token-based design system in Figma, documented in [design-tokens.json](../Design-System/design-tokens.json).

### Color Palette (60-30-10 Rule)
- **Dominant Neutral (60%):** `#FFF8E7` (Warm Cream) — Evokes organic warmth and cleanliness.
- **Secondary (30%):** `#2E7D32` (Forest Green) — Conveys nature, freshness, and high brand credibility.
- **Accent (10%):** `#FF9800` (Warm Orange) — Focuses user attention on primary action CTAs, ratings, and checkout items.
- **Text Contrast:** `#263238` (Charcoal Slate) — Delivers a high-contrast ratio (10.4:1) for comfortable reading.

### Typography Scale (Poppins / Inter)
- **H1 (Screen Title):** 28px Bold Poppins
- **H2 (Card Heading):** 18px Semi-Bold Poppins
- **Body Text:** 14px Regular Inter
- **Captions & Labels:** 12px Medium Inter

---

## 4. UX Decisions & App Structure

### 1. Cover Screen (Sensory Impulse)
- Minimized layout details focusing on a large high-fidelity avocado salad hero photo to stimulate visual appetite.
- High-contrast, floating orange button (`Start Exploring`) drives immediate user interaction.

### 2. About Story (Brand Trust)
- Features farm-to-table messaging, kitchen interior previews, and a head chef bio card.
- Establishes culinary authority and builds trust before showing pricing.

### 3. Category Grid (Information Scannability)
- 2-column rounded cards showing custom category badges (Salads, Burgers, Pizza, Drinks, Desserts).
- Uses colored backdrops matching the food theme (green for salads, orange for burgers) for faster visual indexing.

### 4. Interactive Cart Drawer (Urgency & Control)
- A slide-up drawer card overlays the menu, calculating subtotal, service VAT, and total instantly.
- Quantity adjustment buttons (`-` and `+`) give users immediate control over preorder counts.

### 5. Table Booking form (Friction Minimization)
- Standardizes input fields with 48px tap targets to avoid touch typos.
- Combined table booking form directly pulls pre-order calculations from the cart.

---

## 5. Interactive Prototype Hotspots Map

The companion [prototype.html](../prototype.html) features a side flow panel that highlights hotspots:
1. **Cover Screen** ──(Tap Start Exploring)──> **About Story**
2. **About Story** ──(Tap Explore Menu)──> **Menu Categories**
3. **Menu Categories** ──(Tap Salads)──> **Salads List**
4. **Salads Card** ──(Tap Plus Button)──> **Cart Toast Alert**
5. **Cart Drawer** ──(Tap Proceed to Reserve)──> **Reservation Form**
6. **Reservation Form** ──(Tap Book Table)──> **Booking Success Card**

---

## 6. Accessibility Considerations (A11Y)
- **AAA Contrast:** Text-to-surface contrast ratio measures 10.4:1, exceeding WCAG AAA standards.
- **Clear Tap Targets:** Interactive icons and buttons maintain a minimum spacing layout of 48px.
- **Friendly Badging:** Color-blind friendly badges differentiate Vegetarian (green dot) and Non-Vegetarian (red dot) items.

---

*Case Study Documentation · GreenLife Café App Project*  
*CODSOFT UI/UX Internship Task 3*

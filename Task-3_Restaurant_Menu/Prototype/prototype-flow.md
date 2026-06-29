# GreenLife Café — Interactive Prototype Flow Specifications

This document outlines the user interaction paths, triggers, and animations configured in our Figma-ready vector layout and HTML5 interactive simulator.

---

## 🗺️ Interaction Map Flow

```text
[Cover Screen]
   │
   └── (Tap "Start Exploring" - Smart Animate Slide Left) ──> [About Story]
                                                                  │
   ┌──────────────────────────────────────────────────────────────┘
   │
   ├── (Tap "Explore Menu" - Slide Up) ──> [Menu Categories]
   │                                            │
   │   ┌────────────────────────────────────────┴────────────────────────────────────────┐
   │   ├── (Tap "Healthy Salads") ──> [Salads List] ──> (Tap "+") ──> [Add Toast Overlay]
   │   ├── (Tap "Gourmet Burgers") ──> [Burgers List] ──> (Tap "+") ──> [Add Toast Overlay]
   │   ├── (Tap "Wood-Fired Pizza") ──> [Pizza List] ──> (Tap "+") ──> [Add Toast Overlay]
   │   ├── (Tap "Fresh Juices") ──> [Drinks List] ──> (Tap "+") ──> [Add Toast Overlay]
   │   └── (Tap "Organic Desserts") ──> [Desserts List] ──> (Tap "+") ──> [Add Toast Overlay]
   │                                                                           │
   │   ┌───────────────────────────────────────────────────────────────────────┘
   │   └── (Tap "View Cart" - Slide Up Drawer) ──> [Cart Summary Panel]
   │                                                    │
   │                                                    └── (Tap "Proceed to Reserve")
   │                                                             │
   └── (Tap "Reserve Table" - Slide Left) ───────────────────────┼──> [Reservation Form]
                                                                        │
                                                                        └── (Tap "Book Table" - Confetti Burst)
                                                                                 │
                                                                                 └── [Booking Success Screen]
                                                                                          │
                                                                                          └── (Tap "Back to Home") ──> [Cover Screen]
```

---

## ⚡ Animation Settings

| Transition | Trigger | Destination | Duration | Ease / Settings |
|------------|---------|-------------|----------|-----------------|
| **Smart Animate** | On Tap | About Screen | 400ms | Ease-In-Out |
| **Slide Up** | On Tap | Categories Grid | 350ms | Cubic Bezier (0.4, 0, 0.2, 1) |
| **Fade In** | Hover | Food Card lift | 200ms | Linear |
| **Drawer Slide Up** | On Tap | Cart summary | 450ms | Custom bounce spring |
| **Toast Pop-up** | On Item Add | Bottom screen banner | 300ms | Slide-in from bottom |
| **Scale Up** | Validation | Success Checkmark | 500ms | Spring overshoot |
| **Confetti Blast** | Validation | Screen overlay | 4000ms | Gravity particles simulation |

---

*Figma Prototype Flow Mapping · GreenLife Café*

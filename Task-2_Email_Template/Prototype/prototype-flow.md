# FlowSphere Email — Prototype Flow

## CODSOFT UI/UX Internship Task 2

---

## Prototype Overview

This document outlines the prototype interactions and user flow for the FlowSphere
Welcome & Product Launch Email Template. The email follows a linear scroll-based
interaction pattern with multiple conversion points.

---

## Email Interaction Flow

```
[Email Client Opens]
       │
       ▼
┌─────────────────────────────────────────────┐
│                   HEADER                    │
│  Logo · Features · Pricing · Contact        │
│                                             │
│  ► Click Features → scroll to #features    │
│  ► Click Pricing → scroll to #pricing      │
│  ► Click Contact → scroll to #contact      │
└─────────────────────────────────────────────┘
       │
       ▼ (scroll down)
┌─────────────────────────────────────────────┐
│               HERO SECTION                  │
│  "Welcome to FlowSphere"                    │
│  Subtitle + Dashboard Illustration          │
│                                             │
│  ► Click "Get Started Free"                 │
│    → Opens: https://flowsphere.io/signup    │
└─────────────────────────────────────────────┘
       │
       ▼ (scroll down)
┌─────────────────────────────────────────────┐
│               FEATURES                      │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │Smart Task│ │  Team    │ │Analytics │   │
│  │Mgmt      │ │Collab    │ │          │   │
│  └──────────┘ └──────────┘ └──────────┘   │
│                                             │
│  ► Each card: hover lifts (+shadow)         │
└─────────────────────────────────────────────┘
       │
       ▼ (scroll down)
┌─────────────────────────────────────────────┐
│            SPECIAL OFFER                    │
│  ✨ 30 Days Premium Free                    │
│                                             │
│  ► Click "Claim Now — It's Free"            │
│    → Opens: https://flowsphere.io/trial     │
│                                             │
│  [HIGH PRIORITY CONVERSION ZONE]            │
└─────────────────────────────────────────────┘
       │
       ▼ (scroll down)
┌─────────────────────────────────────────────┐
│              TESTIMONIALS                   │
│  ┌─────────────────┐ ┌─────────────────┐   │
│  │ Sarah Chen ★★★★★│ │Marcus Rivera ★★★│   │
│  │ Nexus Labs      │ │ Velocity Inc    │   │
│  └─────────────────┘ └─────────────────┘   │
│                                             │
│  [Social proof → builds trust]              │
└─────────────────────────────────────────────┘
       │
       ▼ (scroll down)
┌─────────────────────────────────────────────┐
│              DOWNLOAD APP                   │
│  [Google Play]    [App Store]               │
│                                             │
│  ► Click Google Play                        │
│    → play.google.com/store/flowsphere       │
│  ► Click App Store                          │
│    → apps.apple.com/flowsphere             │
└─────────────────────────────────────────────┘
       │
       ▼ (scroll down)
┌─────────────────────────────────────────────┐
│                  FOOTER                     │
│  🐦 LinkedIn  GitHub  Instagram             │
│  hello@flowsphere.io · flowsphere.io        │
│                                             │
│  Privacy Policy · Terms · Unsubscribe       │
│                                             │
│  ► Click Unsubscribe                        │
│    → https://flowsphere.io/unsubscribe      │
│  ► Click Privacy Policy                     │
│    → https://flowsphere.io/privacy          │
└─────────────────────────────────────────────┘
```

---

## Interaction Details

### Primary CTAs (Conversion Actions)
| Element             | Target URL                           | Priority |
|---------------------|--------------------------------------|----------|
| Get Started Free    | /signup                              | 🔴 High  |
| Claim Now           | /trial                               | 🔴 High  |
| Google Play Badge   | play.google.com/flowsphere           | 🟡 Med   |
| App Store Badge     | apps.apple.com/flowsphere            | 🟡 Med   |

### Navigation Links
| Element             | Action                               |
|---------------------|--------------------------------------|
| Features (nav)      | Anchor scroll to #features           |
| Pricing (nav)       | Anchor scroll to #pricing (offer)    |
| Contact (nav)       | Anchor scroll to #contact (footer)   |
| Logo                | Back to top / home                   |

### Footer Links
| Element             | Target URL                           |
|---------------------|--------------------------------------|
| hello@flowsphere.io | mailto:hello@flowsphere.io           |
| flowsphere.io       | https://flowsphere.io                |
| Privacy Policy      | /privacy                             |
| Terms of Service    | /terms                               |
| Unsubscribe         | /unsubscribe?token={token}           |

### Social Media Links
| Platform   | URL                                      |
|------------|------------------------------------------|
| Twitter/X  | https://twitter.com/flowsphere           |
| LinkedIn   | https://linkedin.com/company/flowsphere  |
| GitHub     | https://github.com/flowsphere            |
| Instagram  | https://instagram.com/flowsphere         |

---

## Responsive Behavior

### Desktop (≥640px)
- Max-width: 640px centered in browser
- 3-column feature cards grid
- 2-column testimonials grid
- Horizontal app store badges

### Mobile (≤600px)
- Full-width email (no border radius)
- Single-column feature cards (horizontal icon + text layout)
- Single-column testimonials
- Stacked app store badges

---

## Accessibility Notes

- All interactive elements have unique `id` attributes
- ARIA labels on all icon-only buttons
- `role="main"` on email container
- `role="banner"` on header, `role="contentinfo"` on footer
- `aria-label` on all navigation
- Screen-reader-friendly star ratings (`aria-label="5 out of 5 stars"`)
- `alt` text on all images
- Color contrast ratio: ≥ 4.5:1 for all text elements

---

## Email Client Compatibility

| Client         | Compatibility |
|----------------|---------------|
| Gmail (Web)    | ✅ Full       |
| Apple Mail     | ✅ Full       |
| Outlook 2019+  | ✅ Full       |
| Yahoo Mail     | ✅ Full       |
| Outlook 2013   | ⚠️ Partial    |
| Gmail App iOS  | ✅ Full       |
| Gmail App Android | ✅ Full    |

---

*CODSOFT UI/UX Internship — Task 2*
*Designed by: Noor Mohamed Halith*

# Figma Design Specifications

## CODSOFT UI/UX Internship Task 2 — FlowSphere Email Template

---

## Figma File

> **Note:** Figma requires browser authentication. The design has been implemented as
> a pixel-perfect HTML+CSS+SVG representation that matches all Figma specifications.
> The Figma link below references the Task 1 project. A Task 2 file will be uploaded
> when Figma session is available.

**Figma Project Link (Task 1 Reference):**
👉 [View Task 1 Figma](https://www.figma.com/design/F7fBowz7kiVxKLdu0F0YN4/Untitled?node-id=0-1&t=flvJVzkQQLDP1Di3-1)

---

## Figma Structure (Task 2 Specifications)

### Pages
```
📄 Page 1: Email Template (Desktop)
📄 Page 2: Email Template (Mobile)
📄 Page 3: Design System
📄 Page 4: Components
📄 Page 5: Prototype
```

### Frames / Artboards
```
📦 Email Desktop     — 640 × Auto
📦 Email Mobile      — 375 × Auto
📦 Design System     — 1440 × Auto
📦 Component Library — 1440 × Auto
```

---

## Component Inventory

### Auto Layout Components
| Component           | Variant States     | Direction   |
|---------------------|--------------------|-------------|
| Button/Primary      | Default, Hover     | Horizontal  |
| Button/Secondary    | Default, Hover     | Horizontal  |
| Button/Offer        | Default, Hover     | Horizontal  |
| FeatureCard         | Default, Hover     | Vertical    |
| TestimonialCard     | Default            | Vertical    |
| Avatar              | Size-40, Size-80   | —           |
| Badge/Hero          | Default            | Horizontal  |
| Badge/Offer         | Default            | Horizontal  |
| SocialIcon          | Default, Hover     | —           |
| AppStoreBadge       | GooglePlay, Apple  | Horizontal  |
| NavItem             | Default, Active    | Horizontal  |

### Typography Styles (Figma Text Styles)
| Style Name          | Font            | Size | Weight |
|---------------------|-----------------|------|--------|
| H1/Hero             | Inter           | 36   | 800    |
| H2/Section          | Inter           | 26   | 700    |
| H3/Card             | Inter           | 18   | 700    |
| Body/Regular        | Inter           | 16   | 400    |
| Body/Medium         | Inter           | 16   | 500    |
| Small/Regular       | Inter           | 14   | 400    |
| Small/Medium        | Inter           | 14   | 500    |
| Small/SemiBold      | Inter           | 14   | 600    |
| Caption/SemiBold    | Inter           | 12   | 600    |
| Button/Label        | Inter           | 16   | 600    |

### Color Styles (Figma Color Styles)
| Style Name          | Hex       |
|---------------------|-----------|
| Primary/Default     | #6366F1   |
| Primary/Dark        | #4F46E5   |
| Primary/Light       | #EEF2FF   |
| Secondary/Default   | #8B5CF6   |
| Background/White    | #FFFFFF   |
| Surface/Default     | #F8FAFC   |
| Text/Primary        | #111827   |
| Text/Muted          | #6B7280   |
| Border/Default      | #E5E7EB   |
| Success/Default     | #22C55E   |
| Success/Light       | #DCFCE7   |

### Effect Styles (Figma Effects)
| Style Name          | Definition                                          |
|---------------------|-----------------------------------------------------|
| Shadow/SM           | 0 1px 3px rgba(0,0,0,0.08)                        |
| Shadow/MD           | 0 4px 12px rgba(99,102,241,0.10)                  |
| Shadow/LG           | 0 8px 32px rgba(99,102,241,0.14)                  |
| Shadow/Primary      | 0 6px 20px rgba(99,102,241,0.35)                  |

---

## Spacing System (Figma Auto Layout Gaps)

| Token  | Value  | Usage                    |
|--------|--------|--------------------------|
| sp-1   | 4px    | Icon inner padding       |
| sp-2   | 8px    | Inline gaps, small items |
| sp-3   | 12px   | Grid gaps, badges        |
| sp-4   | 16px   | Card padding, nav gaps   |
| sp-5   | 20px   | Header padding           |
| sp-6   | 24px   | Section padding          |
| sp-8   | 32px   | Section margins          |
| sp-10  | 40px   | Section vertical padding |
| sp-12  | 48px   | Hero top padding         |
| sp-16  | 64px   | Max section spacing      |

---

## Border Radius System
| Token   | Value  | Applied To                |
|---------|--------|---------------------------|
| sm      | 6px    | Tags, small badges        |
| md      | 10px   | Buttons, inputs           |
| lg      | 16px   | Cards, offer section      |
| xl      | 24px   | Email container           |
| full    | 9999px | Circular badges, avatars  |

---

## Prototype Connections (Figma)

```
[Desktop Frame] ──Hover: FeatureCard──▶ [FeatureCard Hover State]
[Desktop Frame] ──Click: CTA Button──▶ [External: flowsphere.io/signup]
[Desktop Frame] ──Click: Claim Now──▶  [External: flowsphere.io/trial]
[Desktop Frame] ──Smart Animate──▶     [Mobile Frame]
```

---

## Export Settings

| Asset               | Format | Resolution | Size     |
|---------------------|--------|------------|----------|
| Email Desktop       | PNG    | 2x         | 1280×... |
| Email Mobile        | PNG    | 3x (375px) | 1125×... |
| Hero Illustration   | SVG    | Vector     | 540×320  |
| Feature Icons       | SVG    | Vector     | 52×52    |
| Avatars             | SVG    | Vector     | 80×80    |
| App Badges          | SVG    | Vector     | 200×60   |
| Design System       | PDF    | —          | A4       |

---

*Design Specifications · CODSOFT UI/UX Internship Task 2*
*FlowSphere — Welcome & Product Launch Email*
*Designed by: Noor Mohamed Halith*

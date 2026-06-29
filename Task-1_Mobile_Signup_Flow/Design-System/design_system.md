# FlowSphere Design Tokens Guide

Unified specifications mapping grid alignment, colors, typography scale, and components.

## 1. Color System

| Token Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Primary** | `#6366F1` | Primary CTA backgrounds, active input outlines, selected state indicators |
| **Secondary** | `#8B5CF6` | Gradient accents, loading spinners, secondary indicators |
| **Background** | `#F8FAFC` | Mobile canvas frame background, light input backgrounds |
| **Surface** | `#FFFFFF` | Input fields, card backgrounds, modal containers |
| **Success** | `#22C55E` | Validation check marks, strong password indicators, sync toasts |
| **Error** | `#EF4444` | Validation error borders, invalid warning alerts |
| **Text Primary** | `#111827` | Headings, labels, active inputs text |
| **Text Secondary**| `#6B7280` | Subtitles, placeholders, captions, unchecked box labels |

## 2. Typography System (Inter Font scale)

*   **Heading 28 Bold:** `font-size: 28px; font-weight: 700; line-height: 36px; letter-spacing: -0.5px;`
*   **Title 22 SemiBold:** `font-size: 22px; font-weight: 600; line-height: 28px; letter-spacing: -0.2px;`
*   **Body 16 Regular:** `font-size: 16px; font-weight: 400; line-height: 24px; letter-spacing: 0px;`
*   **Caption 13 Medium:** `font-size: 13px; font-weight: 500; line-height: 18px; letter-spacing: 0.1px;`
*   **Button 16 SemiBold:** `font-size: 16px; font-weight: 600; line-height: 20px; letter-spacing: 0px;`

## 3. Spacing Standards (8pt Grid)

*   **4px / 8px:** Spacing between icons and text, checkbox padding.
*   **16px:** Padding inside inputs, buttons, and visual cards.
*   **24px:** Phone screen canvas margins.
*   **32px / 48px:** Space separating headings from container forms.

## 4. Curvature & Shadows

*   **8px Radius:** System icons backgrounds, small tooltips.
*   **12px Radius:** Form text fields, dropdown selectors.
*   **16px Radius:** Action buttons, popup toasts.
*   **20px Radius:** Mobile screen borders.
*   **Elevation L1:** `box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);`
*   **Elevation L2:** `box-shadow: 0 16px 24px rgba(15, 23, 42, 0.08);`
*   **Active Glow:** `box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);`

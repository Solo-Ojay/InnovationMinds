## Trueminds / Chuks Kitchen – Design Tokens

> Derived from `/reference/screens` Figma screenshots. Exact values are approximate where not explicitly specified and are documented in **Assumptions**.

---

### COLORS

- **Primary**
  - Brand Orange (buttons, highlights): `#FF8A00`
- **Secondary**
  - Accent Blue (scroll-to-top FAB): `#007BFF`
- **Backgrounds**
  - App background light grey: `#F5F5F7`
  - Card background white: `#FFFFFF`
  - Footer brown: `#5A3318`
  - Promo overlay orange (on hero images): `rgba(255, 138, 0, 0.85)`
- **Text Colors**
  - Heading text: `#111111`
  - Body text: `#555555`
  - Muted/secondary text: `#888888`
  - Footer text on brown: `#FFFFFF`
- **Borders**
  - Light grey border: `#E0E0E0`
  - Input border default: `#D3D3D3`
  - Input border focus: `#FF8A00`
- **Status Colors**
  - Success green (order complete icon): `#16A34A`
  - Warning/light orange background (active category tab): `#FFE4C2`
  - Disabled grey (inactive tabs, disabled buttons): `#C4C4C4`

---

### TYPOGRAPHY

- **Font Family**
  - Primary: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
  - Accent script logo (for “Chuks Kitchen”): simulated using a cursive font-family: `"Brush Script MT", "Pacifico", cursive`
- **Heading Sizes (Desktop)**
  - Hero heading (e.g. “The Heart of Nigerian Home Cooking”): `32px`–`40px`, line-height `1.2`
  - Section titles (e.g. “Popular Categories”, “Chef's Specials”): `24px`, line-height `1.3`
  - Card titles (meal names): `18px`, line-height `1.3`
- **Body Text**
  - Default body copy: `14px`, line-height `1.6`
  - Supporting descriptions (cards, subtitles): `13px`, line-height `1.6`
- **Button Text**
  - Primary buttons (e.g. “Start Your Order”, “Add to cart”): `14px`, `600` weight, uppercase styling where shown
- **Font Weights**
  - Regular: `400`
  - Medium: `500`
  - Semi-bold: `600`
  - Bold (headers): `700`
- **Line Heights**
  - Body: `1.6`
  - Headings: `1.2`–`1.3`

---

### SPACING SYSTEM

- **Base Unit**
  - Core spacing unit: `8px`
- **Section Gaps**
  - Vertical gap between major sections: `40px`–`56px` (approx. `5–7 * 8px`)
- **Card Padding**
  - Meal / category cards: `16px` internal padding
  - Large content cards (order summary, payment, delivery forms): `24px`–`32px`
- **Container Width**
  - Max content width: `1200px`
  - Page padding (left/right): `24px` desktop, `16px` tablet, `12px` mobile

---

### RADIUS & SHADOWS

- **Border Radius**
  - Global card radius: `16px`
  - Button radius: `6px`
  - Input fields: `6px`
  - FAB / round icons: `50%`
- **Shadows**
  - Card shadow (meal cards, forms):
    - `0 10px 25px rgba(15, 23, 42, 0.08)`
  - Floating FAB:
    - `0 8px 18px rgba(15, 23, 42, 0.25)`

---

### ASSUMPTIONS

- Exact color hex values are estimated from the provided screenshots; these can be refined later using Figma inspect tools.
- Font family for the logo script is approximated using a generic cursive font stack.
- Spacing and radius values are normalized to an 8px grid for implementation consistency.



## Project Overview

This project is a **static, fully responsive frontend** implementation of the **Chuks Kitchen / Trueminds** Figma design.  
It replicates all provided screens using only frontend technologies (no backend, no APIs, no authentication, no database).

Design source: `./reference/screens` (screenshots) and the Figma file (`https://www.figma.com/design/EIq17AUkUFl4TTvzvqhgZW/Truemind-UI-DESIGN?node-id=112-471&t=bmCHlatZimGiwpzr-0`).

The implementation focuses on:
- Semantic HTML structure (via React JSX)
- Clean, maintainable CSS using Flexbox and CSS Grid
- Minimal JavaScript (only for view switching and small UI behaviors)
- Strict use of **local assets** from `src/assets/<screenName>/...`

---

## Tech Stack (with simplicity justification)

- **React + Vite**
  - Used only as a lightweight way to structure UI into reusable components.
  - No extra libraries beyond the Vite React template.
  - All content is static; React is not used for complex state management or data fetching.
- **HTML via JSX**
  - Semantic tags (`header`, `main`, `section`, `nav`, `footer`, etc.) to mirror the Figma layout.
- **CSS**
  - Single global stylesheet (`App.css`) plus small component styles.
  - Layouts built with Flexbox and CSS Grid.
  - Media queries for tablet and mobile breakpoints.
- **Minimal JS**
  - Simple in-app “screen” switching (simulating navigation between Figma screens).
  - Tiny UI behaviors (e.g., scroll-to-top button), with no network calls.

**Why this is still “simple” and not over-engineered**
- No routing libraries (e.g. React Router) are used.
- No global state libraries, no context, no Redux.
- No APIs, no async logic, no forms posting data.
- Component structure mirrors screens directly and stays very flat.

---

## Screens & Components Map

Based on the `/reference/screens` set and the Figma design, the following screens and major sections are implemented.

### Screens

1. **Onboarding / Welcome Screen**
   - Large hero image (family at table) on the left
   - Right column with intro text, key benefits, and CTAs:
     - “Start Your Order”
     - “Learn More About Us”
   - Global footer with three columns (“Chuks Kitchen” story, Quick Links, Contact Us, social links) and blue scroll-to-top FAB

2. **Home Screen – Featured Meals, Categories, Promotions**
   - Top navigation: logo + menu (`Home`, `Explore`, `My Orders`, `Account`, `Login` button)
   - Hero banner (“The Heart of Nigerian Home Cooking”) with background image and “Discover what’s new” CTA
   - Search bar (“What are you craving for today?”)
   - Footer identical to onboarding screen

3. **New Menu Additions Promo Screen**
   - Full-width background image of new dish
   - Promo copy (“Introducing Our New Menu Additions!” + description)
   - Primary CTA: “Discover what’s new”
   - Standard footer + FAB

4. **Home – Popular Categories Section**
   - Section title: “Popular Categories”
   - 2x3 grid of category cards:
     - Jollof Delights
     - Swallow & Soups
     - Grills & BBQ
     - Sweet Treats
     - Jollof Delights (variants)
   - Each card: image, category title, rounded corners, subtle shadow, light grey section background

5. **Home – Popular Meals Section**
   - Section title: “Popular”
   - Grid of 2x3 food cards with:
     - Meal image
     - Name + short description
     - Price
     - Circular orange “+” add button

6. **Menu / Food Listing Screen**
   - Large hero banner with restaurant name “Chuks Kitchen”
   - Subtitle with rating text
   - Left section: “Menu Categories” card with vertical tab list:
     - Popular (highlighted with light orange background)
     - Jollof Rice & Entrees
     - Swallow & Soups
     - Grills & sides
     - Beverages
     - Desserts
   - Right: content sections like “Chef’s Specials”, “Jollof Rice & Entrees”, “Swallow & Soups” each with food cards similar to “Popular”.

7. **Food Details Screen**
   - Left: large dish image (Jollof Rice with Fried Chicken)
   - Right: details panel with:
     - Title + price
     - Long description
     - Badges: “Mildly Spicy”, “Vegetarian option available”, “View Allergies”
     - Radio lists for “Choose Your Protein”
     - Checkbox list for “Extra Sides (Optional)”
     - Special Instructions textarea
   - Global footer + FAB

8. **Cart Screen**
   - Title: “Your Cart”
   - List of cart item rows with:
     - Thumbnail image
     - Title + subtitle
     - Quantity controls (`+ 1 -`) and price
     - Remove icon (`x`)
     - Link to “Add more items from Chuks Kitchen”
   - Footer + FAB

9. **Delivery Details Screen**
   - Card titled “Delivery Details”
   - Fields:
     - Address summary + “Change Address”
     - Delivery Time
     - Delivery Instructions (optional)
     - Contact Address
   - Footer + FAB

10. **Order Summary Screen**
    - Card titled “Order Summary”
    - Promo code input + small “Login” button
    - Price breakdown (Subtotal, Delivery Fee, Service Fee, Tax, Total)
    - Delivery / Pick up toggle tabs (orange vs grey)
    - Special Instructions textarea
    - CTA: “Proceed to Checkout”
    - Footer + FAB

11. **Payment Options Screen**
    - Card titled “Payment”
    - “Pay With:” radio group: Card, Bank, Transfer
    - Card fields: Card Number, Expiration Date, CVV, “Save card details” checkbox
    - CTA: “Pay ₦9,900”
    - Fine print paragraph below
    - Footer + FAB

12. **Order Completion Screen**
    - State after payment:
      - Success icon in green circle
      - “Order Placed Successfully!” + short text
      - Reference text: “Order #123RGR231567Y Confirmed”
      - CTA: “Track Order”
      - Disabled “Generate Receipt” text
      - Support link: “Need help with your order?”
    - Footer + FAB

13. **Card Loading Screen**
    - Same layout as payment/completion but with centered loading spinner
    - Header + footer remain visible

14. **Sign In Screen**
    - Split layout:
      - Left: full-height photo with orange overlay and “Chuks Kitchen” messaging
      - Right: login form card:
        - Email/phone field
        - Password field with visibility toggle icon
        - Primary button: “Continue”
        - “Forgot Password?” link
        - Divider “Or continue with”
        - Social buttons: Google, Apple, Facebook
        - Link: “Don’t have an account? Create an account”
    - Footer + FAB

15. **Footer-only Slice**
    - Reference screen with only the footer layout and FAB, used to lock in spacing and alignment.

---

### Reusable UI Components

- **Global Navigation Bar**
  - Logo (script “Chuks Kitchen”)
  - Menu links: Home, Explore, My Orders, Account
  - Right-aligned orange “Login” / “Sign In” button
- **Footer**
  - Left: Chuks Kitchen brand story paragraph
  - Middle: “Quick Links” list
  - Middle-right: “Contact Us” (phone, email, address)
  - Right: Social links (Facebook, Twitter, LinkedIn, Instagram)
  - Scroll-to-top floating blue FAB bottom-right
- **Primary Buttons**
  - Solid orange, rounded corners, white bold text
- **Secondary Buttons / Tabs**
  - Grey background or outline style (e.g. “Pick up” tab, disabled actions)
- **Food / Category Cards**
  - Image top, content bottom
  - Slightly rounded corners, subtle drop shadow, white background
  - Price and small CTA (“+” icon or “Add to cart” button)
- **Form Controls**
  - Inputs with light grey borders and rounded corners
  - Radio and checkbox groups styled to match Figma
  - Textareas with consistent padding + border radius
- **Layout Wrappers**
  - Centered main content cards on a light grey background
  - Max-width container for aligning hero, menu, and detail screens

---

### Shared Layout Elements

- Top navigation bar keeps consistent height, alignment, and spacing across all screens.
- Main content area uses a light grey background with centered white card(s).
- Footer and scroll-to-top FAB are identical on all lower sections.
- Button styles, card radii, typography, and colors are shared across screens.

---

## User Flow & Page Structure

### Navigation Flow

- **Onboarding ➜ Home**
  - “Start Your Order” CTA navigates to the Home / Explore experience.
  - “Learn More About Us” could scroll to or link to a lower informational section (kept static in this implementation).
- **Top Navigation**
  - `Home` shows the hero + categories + popular meals.
  - `Explore` shows the full menu / food listing screen.
  - `My Orders` focuses on the Cart / Order Summary flow.
  - `Account` leads to the Sign In screen.
  - `Login` button is equivalent to `Account` ➜ Sign In.
- **Ordering Flow (static simulation)**
  1. Explore menu and food list.
  2. Open a specific meal (Food Details).
  3. Add to cart and go to Cart screen.
  4. Proceed to Delivery Details.
  5. Proceed to Order Summary.
  6. Proceed to Payment Options.
  7. Show Card Loading.
  8. Show Order Completion.

> All of the above is implemented **purely on the client** with simple in-memory view switching; no real payment, no auth, no persistence.

### Static vs Interactive Elements

- **Static**
  - All textual content, prices, and labels.
  - Layouts, images, and footers.
- **Interactive (visual only)**
  - Navigation bar links: switch between screen views.
  - Primary buttons: move to the “next” screen in the UX flow.
  - Tabs (e.g. Delivery vs Pick up): simple visual state in this implementation.
  - Scroll-to-top FAB: smooth-scrolls to the top of the page.
  - Form inputs: accept user input but do not send data anywhere.

### Primary Calls to Action

- “Start Your Order”
- “Discover what’s new”
- “Add to cart”
- “Proceed to Checkout”
- “Pay ₦9,900”
- “Track Order”

These are wired to screen changes only; no side effects beyond UI state.

---

## Implementation Plan

### Folder Structure

At a high level:

```text
chuks-kitchen/
  src/
    assets/
      homeScreen/...
      onboardingScreen/...
      menuScreen/...
      foodDetailsScreen/...
      cartScreen/...
      signInScreen/...
    components/
      Header/
      Footer/
      Layout/ (if needed)
    screens/
      OnboardingScreen.jsx
      HomeScreen.jsx
      MenuScreen.jsx
      FoodDetailsScreen.jsx
      CartScreen.jsx
      DeliveryDetailsScreen.jsx
      OrderSummaryScreen.jsx
      PaymentOptionsScreen.jsx
      OrderCompletionScreen.jsx
      LoadingScreen.jsx
      SignInScreen.jsx
    App.jsx
    App.css
    main.jsx
  reference/
    design-tokens.md
```

### Component Reuse Strategy

- `Header` and `Footer` components are reused across all screens.
- Common building blocks (food cards, category cards, buttons) are implemented as small components and fed by static arrays of data.
- Screens are pure presentational components; they receive callbacks for “navigateTo(screenName)” rather than managing any logic themselves.

### Responsiveness Approach

- **Desktop-first visual reference**, implemented as **mobile-first CSS**:
  - Base styles target narrow viewports.
  - Media queries progressively enhance layout for tablet and desktop (`min-width: 768px` and `min-width: 1024px`).
- Layout techniques:
  - Flexbox for header, footer columns, and horizontal alignments.
  - CSS Grid for meal and category card grids.
  - Stack columns vertically on mobile (e.g. split hero, split sign-in layout).

---

## Folder Structure

```text
chuks-kitchen/
  src/
    App.jsx
    App.css
    main.jsx
    index.css
    assets/
      homeScreen/...
      onboardingScreen/...
      menuScreen/...
      foodDetailsScreen/...
      cartScreen/...
      signInScreen/...
    components/
      Header/
      Footer/
    screens/
      (all individual screen components)
  reference/
    design-tokens.md
  README.md
```

---

## Screens Implemented

- Onboarding / Welcome Screen
- Home Screen (Featured hero, search, categories, popular meals)
- New Menu Additions Promo
- Popular Categories section
- Popular meals section
- Menu / Food Listing screen (with categories and multiple sections)
- Food Details screen
- Cart screen
- Delivery Details screen
- Order Summary screen
- Payment Options screen
- Order Completion screen
- Card Loading screen
- Sign In screen
- Footer-only layout reference

Each of these is implemented as a dedicated React component under `src/screens` and uses the correct per-screen asset paths (e.g. `src/assets/homeScreen/images/homeScreenBackground.png`).

---

## Design Interpretation

- Followed the design tokens defined in `[design-tokens.md](reference/design-tokens.md)` for colors, typography, radii, and spacing.
- Normalized all spacing to an 8px grid to keep implementation consistent with the screenshots.
- Implemented global layout with:
  - A fixed-width centered content container (`max-width: 1200px`)
  - Light grey page background and white cards
  - Shared header/footer wrapper for all screens
- Used Grid for card layouts so that they gracefully wrap on smaller screens while maintaining the Figma-like arrangement on desktop.
- Respectfully approximated exact sizes and alignments based on screenshot inspection; any unclear details are documented in **Assumptions**.

---

## Assumptions

- Exact hex colors, font sizes, and radii are approximated by eye; they can be refined later using Figma inspect.
- The ordering flow is purely linear and stateless; CTAs simply switch the displayed screen.
- Social login buttons and password visibility toggle are non-functional visuals.
- Loader and success states are modeled using CSS only (no actual network latency).
- Some repeated cards in the designs are represented by mapping over static arrays rather than hardcoding each instance.

---

## Responsiveness Strategy

- Mobile-first CSS:
  - Single-column layouts on small screens.
  - Cards move to 1-per-row on mobile, 2-per-row on tablet, 3-per-row on desktop where applicable.
  - Navigation collapses to a wrapped layout with items stacking when space is constrained (no hamburger menu is shown in the Figma for these screens).
- Key breakpoints:
  - `min-width: 768px` (tablet)
  - `min-width: 1024px` (desktop)

---

## Limitations

- No backend, no authentication, no real payment processing.
- No persistent cart; data and selections reset on refresh.
- Accessibility is basic (semantic elements and labels) but not fully audited against WCAG.
- Exact pixel-perfect parity might differ slightly due to approximated design tokens.
- Only desktop/tablet/mobile layouts shown in screenshots are implemented; intermediate sizes may diverge slightly.

---

## Improvements With More Time

- Refine all design tokens using Figma inspect for exact values.
- Improve keyboard and screen-reader accessibility (focus states, ARIA where needed).
- Add basic client-side validation feedback for forms.
- Introduce simple routing (e.g. React Router) while staying within static-only constraints.
- Add unit tests for UI components.

---

## How to Run

From the `chuks-kitchen` directory:

```bash
npm install
npm run dev
```

Then open the Vite dev server URL shown in the terminal (usually `http://localhost:5173`).

To build a static production bundle:

```bash
npm run build
npm run preview
```

---

## Final Self Check

- [ ] All screenshot screens replicated
- [ ] Uses correct per-screen asset paths
- [ ] Responsive on mobile/tablet/desktop
- [ ] No backend/API/auth
- [ ] No over-engineering
- [ ] Documentation complete


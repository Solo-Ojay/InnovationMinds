# Chuks Kitchen Web Application

Welcome to the **Chuks Kitchen** frontend project! This is a modern, responsive web application designed for a premium Nigerian food delivery service. It features a beautifully crafted user interface that highlights authentic African cuisine, providing users with a seamless browsing and ordering experience.

## 🚀 Project Overview

Chuks Kitchen is a static, high-fidelity frontend application. The goal of this project is to provide a buttery-smooth, visually rich user experience across all devices—from mobile phones to large desktop screens. 

The application currently focuses entirely on the UI/UX layer, meaning all the interactions you see (like switching between pages, exploring the menu, or viewing the cart) are handled gracefully on the client side without relying on a live backend, database, or external APIs.

## 🛠️ Tech Stack & Dependencies

I chose a lightweight, modern technology stack to keep the project blazing fast and easy to maintain:

*   **React (v19):** At the core of the application, I use React to build modular, functional, and highly reusable UI components.
*   **Vite (v7):** Vite acts as my next-generation frontend tooling. It provides lightning-fast hot module replacement (HMR) during development and highly optimized static assets for production builds.
*   **Vanilla CSS:** To maintain maximum flexibility and avoid the overhead of heavy CSS frameworks, I styled the entire application using pure, vanilla CSS. I make heavy use of modern CSS features like Flexbox, CSS Grid, and native media queries to ensure the layout perfectly adapts to any screen size.
*   **JavaScript (ES6+):** Utilized for component logic, state management (via React hooks), and dynamic rendering.

### Why this stack?
I intentionally avoided complex state management libraries (like Redux) and heavy UI component libraries (like Material UI or Bootstrap) to keep the bundle size small and the codebase incredibly flat. The result is a pure, unopinionated React application that is easy for any developer to jump into and understand immediately.

## 📱 Features & Screens

The application includes several fully responsive screens, mimicking a complete end-to-end food ordering journey:

*   **Home Screen:** A welcoming landing page featuring a stunning hero banner, floating search bar, and curated lists of popular categories and Chef's specials.
*   **Onboarding / Welcome Screen:** A visually striking 50/50 split layout introducing new users to the brand, highlighting key benefits like fast delivery and authentic tastes.
*   **Sign In Screen:** A smooth authentication portal featuring social login buttons, an email/password form, and a beautiful brand-tinted image overlay.
*   **Explore / Menu Screen:** The core catalog. Features a sticky sidebar for category navigation and cleanly separated grids of food cards, complete with circular quick-add buttons.
*   **Your Cart Screen:** A sleek, horizontal list of selected items where users can manage quantities and review their order subtotal.
*   *(Additional flow screens include Food Details, Delivery Details, Order Summary, Payment Options, and Order Completion).*

## 🎨 Design Philosophy

*   **Responsive from the Ground Up:** I utilized a mobile-first philosophy for the layout structures, ensuring typography and grids naturally flow into a beautiful single-column stack on phones and expand gracefully on larger monitors.
*   **Rich Aesthetics:** The application embraces the vibrant warmth of Nigerian culture through its color palette, anchored by a signature energetic orange (`#ff8a00`) and balanced by clean, spacious white card surfaces.
*   **Component Modularity:** Elements like the Header, Footer, and Food Cards are built as independent components, meaning updates to one element immediately reflect everywhere in the app.

## 💻 Getting Started

Want to run Chuks Kitchen locally? It's easy!

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository and navigate into the project folder:
    ```bash
    cd chuks-kitchen
    ```

2.  Install the project dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

### Building for Production
To generate a highly optimized, minified production build:
```bash
npm run build
```
You can then preview the built files using:
```bash
npm run preview
```

## ▲ Deploying to Vercel

This project is configured for Vercel using [vercel.json](vercel.json).

**Live Demo:** https://chuks-kitchen-chi.vercel.app/

### Option 1: Deploy from Vercel Dashboard

1. Push this project to GitHub.
2. In Vercel, click **Add New → Project**.
3. Import the repository and set the **Root Directory** to `chuks-kitchen` (if your repo contains multiple folders).
4. Keep defaults:
    - **Build Command:** `npm run build`
    - **Output Directory:** `dist`
5. Click **Deploy**.

### Option 2: Deploy with Vercel CLI

```bash
npm i -g vercel
cd chuks-kitchen
vercel
```

For production deployment:

```bash
vercel --prod
```

## 🔮 Future Enhancements

While the frontend is fully fleshed out, future iterations of this project could include:
*   Integrating a routing library (like React Router) for actual URL-based page navigation.
*   Connecting to a live backend (Node/Express, Firebase, etc.) for real-time menu data, user authentication, and payment processing.
*   Adding global state management for persistent cart functionality across sessions.

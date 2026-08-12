````markdown
# Fleur — React Front-End Recreation

A React.js recreation of the **Fleur** website home page, built as a front-end development internship assignment.

## Project Overview

This project recreates the Fleur website's desktop home page with a focus on:

- Accurate layout and spacing
- Navigation and dropdown/mega-menu interactions
- Responsive menu behavior for smaller screens
- Shopping cart and search interactions
- Scroll-based navbar styling
- Logo color transition on scroll
- Menu open/close animations
- Visual styling matching the reference design

The main goal is to reproduce the provided reference website as accurately as possible using React.js, CSS, and reusable components.

## Tech Stack

- **React.js**
- **JavaScript (ES6+)**
- **CSS3**
- **React Icons**
- **Vite**
- **npm**

## Main Features

### Desktop Navbar

- Fleur logo
- HOME
- PAGES
- PORTFOLIO
- BLOG
- SHOP
- ELEMENTS
- Shopping cart icon
- Search icon
- Menu icon
- Centered desktop navigation
- Hover-based dropdown and mega menus

### Scroll Effect

The navbar changes appearance when the page is scrolled:

- At the top of the page:
  - Transparent navbar
  - White navigation text
  - White logo
- After scrolling:
  - White navbar background
  - Dark navigation text
  - Brown/dark Fleur logo

### Menu

The menu button can open and close the existing menu panel.

- Menu icon changes to an X when opened
- X has a rotation hover animation
- Menu content can contain expandable submenu sections
- Smaller screen sizes use the existing mobile menu implementation

### Search

The search icon opens a search overlay containing a search input and close button.

### Shopping Cart

The shopping cart icon opens a cart popup displaying the current cart state.

## Project Structure

```text
project-fleur/
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   │   ├── hero-1.jpg
│   │   │   ├── hero-2.jpg
│   │   │   └── hero-3.jpg
│   │   │
│   │   ├── sharing/
│   │   │   ├── sharing-bg.jpg
│   │   │   ├── sharing-1.jpg
│   │   │   ├── sharing-2.jpg
│   │   │   ├── sharing-3.jpg
│   │   │   ├── sharing-4.jpg
│   │   │   ├── sharing-5.jpg
│   │   │   └── sharing-6.jpg
│   │   │
│   │   ├── testimonials/
│   │   │   └── testimonials-bg.jpg
│   │   │
│   │   ├── work/
│   │   │   ├── work-1.jpg
│   │   │   ├── work-2.jpg
│   │   │   ├── work-3.jpg
│   │   │   ├── work-4.jpg
│   │   │   ├── work-5.jpg
│   │   │   ├── work-6.jpg
│   │   │   ├── work-7.jpg
│   │   │   └── work-8.jpg
│   │   │
│   │   ├── team/
│   │   │   ├── team-bg.jpg
│   │   │   ├── team-1.jpg
│   │   │   ├── team-2.jpg
│   │   │   └── team-3.jpg
│   │   │
│   │   ├── products/
│   │   │   ├── product-autumn.jpg
│   │   │   ├── product-armchair.jpg
│   │   │   ├── product-forest.jpg
│   │   │   └── product-dress.jpg
│   │   │
│   │   ├── tweets/
│   │   │   └── tweets-bg.jpg
│   │   │
│   │   ├── clients/
│   │   │   ├── client-1.png
│   │   │   ├── client-2.png
│   │   │   ├── client-3.png
│   │   │   ├── client-4.png
│   │   │   └── client-5.png
│   │   │
│   │   └── solutions/
│   │       ├── solutions-bg.jpg
│   │       ├── device-1.png
│   │       ├── device-2.png
│   │       └── device-3.png
│   │
│   └── favicon.ico
│
├── src/
│   │
│   ├── assets/
│   │   └── logo/
│   │       ├── logo-light.png
│   │       └── logo-dark.png
│   │
│   ├── components/
│   │   │
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.css
│   │   │   ├── MegaMenu.jsx
│   │   │   ├── DropdownMenu.jsx
│   │   │   │
│   │   │   ├── HomeMenu.jsx
│   │   │   ├── PagesMenu.jsx
│   │   │   ├── PortfolioMenu.jsx
│   │   │   ├── BlogMenu.jsx
│   │   │   ├── ShopMenu.jsx
│   │   │   ├── ElementsMenu.jsx
│   │   │   │
│   │   │   └── MobileMenu.jsx
│   │   │
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   │
│   ├── sections/
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   │
│   │   ├── Features/
│   │   │   ├── Features.jsx
│   │   │   └── Features.css
│   │   │
│   │   ├── Sharing/
│   │   │   ├── Sharing.jsx
│   │   │   └── Sharing.css
│   │   │
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.jsx
│   │   │   └── Testimonials.css
│   │   │
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   │
│   │   ├── Portfolio/
│   │   │   ├── Portfolio.jsx
│   │   │   └── Portfolio.css
│   │   │
│   │   ├── Counters/
│   │   │   ├── Counters.jsx
│   │   │   └── Counters.css
│   │   │
│   │   ├── Team/
│   │   │   ├── Team.jsx
│   │   │   └── Team.css
│   │   │
│   │   ├── Products/
│   │   │   ├── Products.jsx
│   │   │   └── Products.css
│   │   │
│   │   ├── Tweets/
│   │   │   ├── Tweets.jsx
│   │   │   └── Tweets.css
│   │   │
│   │   ├── Clients/
│   │   │   ├── Clients.jsx
│   │   │   └── Clients.css
│   │   │
│   │   └── Solutions/
│   │       ├── Solutions.jsx
│   │       └── Solutions.css
│   │
│   ├── pages/
│   │   └── Home/
│   │       ├── Home.jsx
│   │       └── Home.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
````

> The exact project structure may vary depending on the final implementation.

## Installation

Clone the project and install the dependencies:

```bash
npm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Then open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Assignment Requirements

The assignment requires recreating the **home page** using React.js for a **desktop screen size**, with emphasis on accuracy of:

* Elements
* Theme
* Animations
* Overall visual appearance

The completed project should be hosted and the hosted website link shared for evaluation.

## Current Implementation

The project currently focuses on recreating the Fleur navigation experience, including:

* Desktop navigation
* Centered navigation links
* Mega menus
* Dropdown menus
* Cart popup
* Search overlay
* Menu panel
* Scroll-based navbar styling
* Logo color changes
* Menu icon animation
* Smaller-screen menu behavior

## Future Improvements

If required, the project can be extended with:

* More accurate page sections
* Additional hover animations
* Improved typography matching
* Further pixel-level spacing adjustments
* Full mobile/tablet optimization
* Additional homepage sections and interactions

## Author

**Anurag Sharma**

Built as a front-end web development internship assignment.

```
```

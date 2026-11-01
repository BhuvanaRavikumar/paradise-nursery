# Paradise Nursery — Plant Shopping Application

**Paradise Nursery** is a responsive, interactive online plant shop built as a React final project. Browse a curated collection of 18 houseplants across three categories, add favorites to your shopping cart, and manage item quantities with Redux Toolkit.

## Features

- **Landing page:** Paradise Nursery branding, an illustrated botanical background, and a prominent **Get Started** button.
- **About Us:** Company story and mission.
- **Plant catalog:** 18 unique houseplants across **Easy Care**, **Statement Plants**, and **Air Purifying** (6 plants in each category), with illustrations, names, descriptions, prices, and care tips.
- **Catalog filters:** Filter by category and search for plants by name or description.
- **Add to Cart:** Adds a product to Redux state, disables the product's Add to Cart button, and updates the navbar's live cart quantity.
- **Shopping cart:** Displays each plant's thumbnail, name, unit price, quantity, and line total; supports increasing/decreasing quantity and removing items.
- **Order summary:** Live subtotal, total amount, and total quantity. Shipping is labeled free for this demo.
- **Checkout:** Displays a **Coming Soon** message; no payment is collected.
- **Navigation:** Home, Plants, Our Story, and Cart links, with the same navbar on the catalog and cart pages.
- **Persistence:** Saves cart contents in browser local storage across reloads.
- **Responsive design:** Works on mobile, tablet, and desktop. All 18 plant illustrations are included locally.

## Tech stack

- React 19 + Vite 6
- Redux Toolkit + React Redux
- React Router
- CSS3 (responsive styling)
- SVG plant illustrations (included in `public/images`)

## Run locally

Prerequisites: Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). To build a production version:

```bash
npm run build
npm run preview
```

## Project structure

```text
paradise-nursery/
├── README.md                      # Project description
├── index.html
├── package.json
├── vite.config.js
├── public/images/                 # 18 original plant SVG illustrations
└── src/
    ├── App.css                    # Global, landing-page, and responsive styling
    ├── App.jsx                    # Landing page, routes, and footer
    ├── main.jsx                   # React entry point and Redux provider
    ├── components/
    │   ├── AboutUs.jsx            # Company information
    │   ├── ProductList.jsx        # Catalog, filters, add-to-cart actions
    │   ├── CartItem.jsx           # Shopping cart and checkout placeholder
    │   ├── Navbar.jsx             # Shared navigation and cart count
    │   └── Icons.jsx              # Small local SVG icons
    ├── data/plants.js             # 18 plant records in 3 categories
    └── store/
        ├── CartSlice.jsx          # Redux slice, actions, selectors
        └── store.js               # Redux store and localStorage persistence
```

## Assignment file checklist

1. `README.md` — project name and description
2. `src/components/AboutUs.jsx` — About Us company details
3. `src/App.css` — landing page botanical background and styling
4. `src/App.jsx` — landing page with company name and Get Started button
5. `src/store/CartSlice.jsx` — Redux shopping cart slice
6. `src/components/ProductList.jsx` — plant listing and Add to Cart functionality
7. `src/components/CartItem.jsx` — cart management and totals

## Upload to GitHub

1. Create a **new empty GitHub repository** named `paradise-nursery` (don't initialize with a separate README).
2. In the downloaded project folder, run:

```bash
git init
git add .
git commit -m "Build Paradise Nursery shopping cart"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/paradise-nursery.git
git push -u origin main
```

3. Replace `YOUR_USERNAME` with your actual GitHub username.
4. Use the **direct GitHub file URLs** for the seven grading tasks (see checklist above). Example URL format:

`https://github.com/YOUR_USERNAME/paradise-nursery/blob/main/src/App.jsx`

## Notes

This is a learning/demo application. The checkout is intentionally not connected to a payment provider. The plant illustrations are original SVG assets generated for this project. The catalog's plant care tips are general guidance, not individualized horticultural advice.

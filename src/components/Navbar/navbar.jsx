import { useState } from "react";
import DesktopSideMenu from "./DesktopSideMenu";
import {
  FiShoppingCart,
  FiSearch,
  FiMenu,
  FiX,
} from "react-icons/fi";

import HomeMenu, {
  columns as homeColumns,
} from "./HomeMenu";

import PagesMenu, {
  columns as pagesColumns,
} from "./PagesMenu";

import PortfolioMenu, {
  columns as portfolioColumns,
} from "./PortfolioMenu";

import BlogMenu, {
  columns as blogColumns,
} from "./BlogMenu";

import ShopMenu, {
  columns as shopColumns,
} from "./ShopMenu";

import ElementsMenu, {
  columns as elementsColumns,
} from "./ElementsMenu";

import MobileMenu from "./MobileMenu";
import logo from "../../assets/logo/logo-light.png"
import "./Navbar.css";


function Navbar({ scrolled }) {

  const [activePanel, setActivePanel] = useState(null);


  const togglePanel = (panel) => {
    setActivePanel((current) =>
      current === panel ? null : panel
    );
  };


  const closePanel = () => {
    setActivePanel(null);
  };


  return (
    <>

      {/* ==================================================
          NAVBAR
      ================================================== */}

      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >

        {/* ==================================================
            LOGO
        ================================================== */}

        <div className="navbar-logo">
          <img src={logo} alt="Fleur Logo"/>
        </div>


        {/* ==================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <nav className="navbar-navigation">

          {/* HOME */}

          <div className="navbar-item navbar-item-mega">

            <a href="#home">
              HOME
            </a>

            <HomeMenu />

          </div>


          {/* PAGES */}

          <div className="navbar-item navbar-item-dropdown">

            <a href="#pages">
              PAGES
            </a>

            <PagesMenu />

          </div>


          {/* PORTFOLIO */}

          <div className="navbar-item navbar-item-mega">

            <a href="#portfolio">
              PORTFOLIO
            </a>

            <PortfolioMenu />

          </div>


          {/* BLOG */}

          <div className="navbar-item navbar-item-dropdown">

            <a href="#blog">
              BLOG
            </a>

            <BlogMenu />

          </div>


          {/* SHOP */}

          <div className="navbar-item navbar-item-dropdown">

            <a href="#shop">
              SHOP
            </a>

            <ShopMenu />

          </div>


          {/* ELEMENTS */}

          <div className="navbar-item navbar-item-mega">

            <a href="#elements">
              ELEMENTS
            </a>

            <ElementsMenu />

          </div>

        </nav>


        {/* ==================================================
            RIGHT ICONS
        ================================================== */}

        <div className="navbar-actions">

          {/* CART */}

          <button
            className="navbar-icon-button cart-button"
            aria-label="Shopping cart"
            onClick={() => togglePanel("cart")}
          >
            <FiShoppingCart />
          </button>


          {/* SEARCH */}

          <button
            className="navbar-icon-button search-button"
            aria-label="Search"
            onClick={() => togglePanel("search")}
          >
            <FiSearch />
          </button>


          {/* MENU */}

          <button
            className="navbar-icon-button menu-button"
            aria-label="Menu"
            onClick={() => togglePanel("menu")}
          >

            {activePanel === "menu" ? (
              <FiX />
            ) : (
              <FiMenu />
            )}

          </button>

        </div>

      </header>


      {/* ==================================================
          CART
      ================================================== */}

      {activePanel === "cart" && (

        <div className="cart-popup">

          <p>
            No products in the cart.
          </p>

        </div>

      )}


      {/* ==================================================
          SEARCH
      ================================================== */}

      {activePanel === "search" && (

        <div className="search-overlay">

          <div className="search-overlay-inner">

            <input
              type="text"
              placeholder="Type your search..."
              autoFocus
            />

            <button
              className="search-close"
              aria-label="Close search"
              onClick={closePanel}
            >
              <FiX />
            </button>

          </div>

        </div>

      )}


      {/* ==================================================
          MOBILE MENU
      ================================================== */}

     {/* ==================================================
    MENU PANEL
================================================== */}

{activePanel === "menu" && (

  <>
    {/* DESKTOP MENU */}

    <div className="desktop-only-menu">

      <DesktopSideMenu
        onClose={closePanel}
      />

    </div>


    {/* MOBILE MENU */}

    <div className="mobile-only-menu">

      <div className="mobile-menu-panel">

        <MobileMenu
          homeColumns={homeColumns}
          pagesColumns={pagesColumns}
          portfolioColumns={portfolioColumns}
          blogColumns={blogColumns}
          shopColumns={shopColumns}
          elementsColumns={elementsColumns}
        />

      </div>

    </div>
  </>

)}
    </>
  );
}


export default Navbar;
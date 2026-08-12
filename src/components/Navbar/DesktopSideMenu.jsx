import {
  FiX,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";

import logo from "../../assets/logo/logo-light.png";
import "./DesktopSideMenu.css";

function DesktopSideMenu({ onClose }) {
  return (
    <div className="desktop-side-menu">

      <div className="desktop-side-menu-inner">

        {/* CLOSE BUTTON */}
        <button
          className="desktop-side-menu-close menu-close-button"
          onClick={onClose}
          aria-label="Close menu"
        >
          <FiX />
        </button>


        {/* LOGO */}
        <div className="desktop-side-menu-logo">
          <img src={logo} alt="Fleur Logo" />
        </div>


        {/* DESCRIPTION */}
        <p className="desktop-side-menu-description">
          Lorem ipsum dolor sit amet, consectete adipi.
          Suspendisse ultrices hendrerit a vitae vel a
          sodales ac lectus.
        </p>


        {/* LINKS */}
        <div className="desktop-side-menu-links">

          <h3>Links</h3>

          <a href="#portfolio-list">
            Pinterest Portfolio List
          </a>

          <a href="#portfolio-gallery">
            Portfolio Gallery List
          </a>

          <a href="#portfolio-masonry">
            Portfolio Masonry Single
          </a>

        </div>


        {/* INSTAGRAM */}
        <div className="desktop-side-menu-instagram">

          <h3>Instagram Feed</h3>

          <div className="desktop-instagram-placeholder">
          </div>

        </div>


        {/* FOLLOW */}
        <div className="desktop-side-menu-follow">

          <span>Follow Us</span>

          <a href="#instagram" aria-label="Instagram">
            <FiInstagram />
          </a>

          <a href="#facebook" aria-label="Facebook">
            <FiFacebook />
          </a>

          <a href="#twitter" aria-label="Twitter">
            <FiTwitter />
          </a>

        </div>

      </div>

    </div>
  );
}

export default DesktopSideMenu;
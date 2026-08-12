import { FiExternalLink, FiShoppingCart } from "react-icons/fi";
import "./SideButtons.css";
import { useEffect, useState } from "react";

function SideButtons() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 50) {
        setCollapsed(false);
      } else if (currentScrollY > lastScrollY) {
        setCollapsed(true);
      } else if (currentScrollY < lastScrollY) {
        setCollapsed(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`side-buttons ${collapsed ? "side-buttons-collapsed" : ""}`}>

      <a href="#" className="side-button related">
        <span className="related-icon"><FiExternalLink/></span>
        <span className="side-button-text">RELATED</span>
      </a>

      <a href="#" className="side-button buy-now">
        <FiShoppingCart />
        <span className="side-button-text">BUY NOW</span>
      </a>

    </div>
  );
}

export default SideButtons;
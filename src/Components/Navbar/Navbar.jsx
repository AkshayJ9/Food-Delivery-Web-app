import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/Storecontext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cartItems } = useContext(StoreContext); // Destructure cartItems directly

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("shifted", !isMenuOpen);
  };

  // Function to get the total number of items in the cart
  const getTotalItemsInCart = () => {
    return Object.values(cartItems).reduce((acc, count) => acc + count, 0);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" />
      </Link>

      {/* Hamburger icon for mobile view */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isMenuOpen ? "open" : ""}></span>
        <span className={isMenuOpen ? "open" : ""}></span>
        <span className={isMenuOpen ? "open" : ""}></span>
      </div>

      {/* Overlay to dim background when menu is open */}
      <div
        className={`overlay ${isMenuOpen ? "show" : ""}`}
        onClick={toggleMenu}
      ></div>

      <ul className={`navbar-menu ${isMenuOpen ? "show" : ""}`}>
        <Link
          to="/"
          onClick={() => {
            setMenu("home");
            setIsMenuOpen(false); // Close menu on link click
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("menu");
            setIsMenuOpen(false); // Close menu on link click
          }}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => {
            setMenu("mobile-app");
            setIsMenuOpen(false); // Close menu on link click
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => {
            setMenu("contact-us");
            setIsMenuOpen(false); // Close menu on link click
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <Link to="/cart" style={{ position: "relative" }}>
            {" "}
            {/* Add relative positioning here */}
            <img src={assets.basket_icon} alt="Basket Icon" />
            {/* Show dot only if there are items in the cart */}
            {getTotalItemsInCart() > 0 && <div className="dot"></div>}
          </Link>
        </div>
        <button className="btn" onClick={() => setShowLogin(true)}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;

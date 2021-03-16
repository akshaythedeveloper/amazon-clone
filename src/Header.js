import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { yellow } from "@material-ui/core/colors";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
    handleBurgerMenu();
  };

  const handleBurgerMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const burgerClickHandler = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello {user ? user?.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign-Out" : "Sing-in"}
            </span>
          </div>
        </Link>
        <Link to="./orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>

      <div className="header__burgerIconContainer" onClick={burgerClickHandler}>
        <FontAwesomeIcon className="header__burgerIcon" icon={faBars} />
      </div>

      <div
        className={`header__burgerDropdownMenu ${
          isMenuOpen ? "header__burgerActive" : "header__burgerInactive"
        }`}
      >
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello {user ? user?.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign-Out" : "Sing-in"}
            </span>
          </div>
        </Link>
        <Link to="./orders" onClick={handleBurgerMenu}>
          <div className="header__option">
            <p>Returns & Orders</p>
          </div>
        </Link>
        <div className="header__option">
          <p>Your Prime</p>
        </div>
        <Link to="/checkout" onClick={handleBurgerMenu}>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              Basket: {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

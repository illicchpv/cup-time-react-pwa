/* eslint-disable no-unused-vars */
import {Link, useLocation} from "react-router-dom";
import {useCart} from "../context/CartContext";
import {calcTotalCount, getActiveClass} from "../const";
import {useProduct} from "../context/ProductContext";
import {useEffect, useState} from "react";

export const Header = () => {
  const location = useLocation();
  const {cart} = useCart();
  const totalCnt = calcTotalCount(cart);
  const {categories, setCategory} = useProduct();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const isCartEmpty = calcTotalCount(cart) === 0 ? 'isCartEmpty' : '';

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <header className={`header ${isCartEmpty}`}>
      <div className="container header__container">
        <Link className="header__logo-link" to="/">
          <img className="header__logo" src="./image/logo.svg" alt="Cup time логотип" />
        </Link>

        <nav className={`header__nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="header__menu">
            {Object.keys(categories).map((category) =>
              <li className="header__menu-item" key={category}>
                <Link className={`header__menu-link ${getActiveClass(category)}`}
                  to={`/products?category=${category}`}
                  onClick={closeMenu}
                >{categories[category]}
                </Link>
              </li>)
            }
          </ul>

          <button className="header__close-btn" aria-label="Закрыть меню"
            onClick={closeMenu}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="7.28174" y="7.07532" width="20" height="1" transform="rotate(45 7.28174 7.07532)" fill="#D9D9D9" />
              <rect x="6.5752" y="21.2173" width="20" height="1" transform="rotate(-45 6.5752 21.2173)" fill="#D9D9D9" />
            </svg>
          </button>
        </nav>

        <div className="header__control">
          <Link className="header__cart-link" to="/cart"
            onClick={()=>setCategory('')}
          >{totalCnt}</Link>

          <button className="header__burger" aria-label="Открыть меню"
            onClick={openMenu}
          >
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="9.5" width="20" height="1" fill="#D9D9D9" />
              <rect x="4" y="14.5" width="20" height="1" fill="#D9D9D9" />
              <rect x="4" y="19.5" width="20" height="1" fill="#D9D9D9" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

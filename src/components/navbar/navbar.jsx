import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SideCart from "./../sideCart/sideCart";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "./nav.css";
import UseAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { auth } = UseAuth();
  const { t } = useTranslation();
  ////////////////////////////////////////////////////
  const [isCartOpen, setIsCartOpen] = useState(false);
  const counter = useSelector((state) =>
    state.cart.reduce((total, product) => {
      return total + product.quantity;
    }, 0)
  );

  function openCart() {
    setIsCartOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
  }
  console.log(auth);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light px-4">
        <div className="container-fluid ">
          <NavLink to="/home" className="nav-link">
            <img src="/assets/img/nav_img.png" alt="logo" height="70" />
          </NavLink>
          <div className="collapse navbar-collapse flex-grow-0 " id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link">{t("navbar.home")}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link">{t("navbar.store")}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tranding" className="nav-link">{t("navbar.tranding")}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">{t("navbar.about")}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">{t("navbar.contact")}</NavLink>
              </li>
              <div id="navy">
                <ul className="navbar-nav d-flex align-content-center flex-wrap nav">
                  <ul className="navbar-nav nav">
                    <li>
                      <NavLink to="/lang" className="nav-link">
                        <i className="bi bi-translate"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/share" className="nav-link">
                        <i className="bi bi-share-fill"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/search" className="nav-link">
                        <i className="bi bi-search"></i>
                      </NavLink>
                    </li>
                    <li onClick={() => {openCart()}} style={{ position: 'relative' }}>
                        <span className="badge rounded-pill position-absolute top-0 start-60 translate-middle">{counter}</span>
                        <a className="nav-link text-dark h5" href="#">
                          <i className="bi bi-cart-fill"></i>
                        </a>
                    </li>
                    <li>
                      <NavLink to="/call" className="nav-link">
                        <i className="bi bi-telephone-fill"></i>
                      </NavLink>
                    </li>
                    <li>
                      {!auth ? (
                        <NavLink to="/login" className="nav-link">
                          <i className="bi bi-person-fill"></i>
                        </NavLink>
                      ) : (
                        <NavLink to="/profile" className="nav-link">
                          <i className="bi bi-person-fill"></i>
                        </NavLink>
                      )}
                    </li>
                  </ul>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <div onClick={() => {closeCart(); }}
          className={`sidebar-overlay ${isCartOpen ? "active" : ""}`}
        ></div>
        <SideCart isCartOpen={isCartOpen} handleClose={closeCart} />
      </div>
    </>
  );
};

export default Navbar;

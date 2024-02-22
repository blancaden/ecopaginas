import React from "react";
import Logo from "../assets/logo.png";
import IconPhone from "../assets/Phone.png";
import "../App.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <div className="logo-div">
        <img src={Logo} alt="logo" className="Logo" />
      </div>
      <div className="header-navbar">
        <nav className="navbar">
          <ul>
            <Link to="/" className="nav-link">
              Top Libros
            </Link>

            <Link to="/Promotions" className="nav-link">
              Promociones
            </Link>

            <Link to="/" className="nav-link">
              Promociones
            </Link>
            
            <Link to="/" className="nav-link">
              Novedades
            </Link>
            <input
              type="search"
              placeholder="Busca tu libro aquí"
              className="input-search"
            />
            <div>
              <img src={IconPhone} alt="" className="Phone" />
              <p>+91 259 1090</p>

              <button className="share-btn">¡Comparte tu libro!</button>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

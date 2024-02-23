import React from "react";
import Logo from "../assets/logo.png";
import IconPhone from "../assets/Phone.png";
// import "../App.css";
import  "../pages/Navbar.css"
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
export const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <div className="logo-div">
        <img src={Logo} alt="logo" className="Logo" />
      </div>
      <div className="header-navbar">
        

          <ul>
            <Link to="/Top_libros" className="nav-link">
              Top Libros
            </Link>

            <Link to="/Promociones" className="nav-link">
              Promociones
            </Link>
            
            <Link to="/Novedades" className="nav-link">
              Novedades
            </Link>
            <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Título del libro" aria-label="Search" />
            <button class="btn btn-sm btn-outline-secondary" type="button">Buscar</button>
            </form>
            {/* <input
              type="search"
              placeholder="Busca tu libro aquí"
              className="input-search"
            /> */}
            <div>
              <img src={IconPhone} alt="" className="Phone" />
              <p>+91 259 1090</p>

              <button className="share-btn">¡Comparte tu libro!</button>
            </div>
          </ul>
       
      </div>
    </nav>
  );
};

export default Navbar;
// import React from 'react';
// import { Link } from 'react-router-dom'
// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/top_libros">Top Libros</Link>
//         </li>
//         <li>
//           <Link to="/Promociones">Promociones</Link>
//         </li>
//         <li>
//           <Link to="/Novedades">Novedades</Link>
//         </li>
//       </ul>
//     </nav>
//   )
// }

// export default Navbar
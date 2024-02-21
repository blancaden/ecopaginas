import React from 'react'
import Logo from '../assets/logo.png'
import IconPhone from '../assets/Phone.png'
import '../App.css'

export const Navbar = () => {
  return (
    <header>
    <div className="logo-div">
        <img src={Logo} alt="logo" className='Logo'/>
    </div>
    <div className="header-navbar">
        <nav>
          <a className='nav-link'>Top Libros</a>
          <a className='nav-link'>Promociones</a>
          <a className='nav-link'>Novedades</a>
          <input type="search" placeholder="Busca tu libro aquí" className='input-search'/>
          <div>
          <img src={IconPhone} alt="" className='Phone' />
          <p>666+666</p>
          
        </div>
        </nav>
        
        
    </div>
</header>
  )
}

export default Navbar

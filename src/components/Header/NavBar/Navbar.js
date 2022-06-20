import React from 'react'

import hamburguesa from '../../../assets/iconos/hamburguesa.svg'
const Navbar = () => {
  return (
    <>
    <nav  className="navContainer">
       <div className="navBurguer"><img src={hamburguesa} alt=""/></div>
       <div className="navEntradas"><h2>Entradas</h2></div>
    </nav>
    </>
  )
}

export default Navbar
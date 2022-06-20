import React from 'react'
import Navbar from './NavBar/Navbar'
import fondo from '../../assets/banner/referencia-fondo.png'

const Header = () => {
  return (
    <header className="header">
        <section class="headerFestval">
        <Navbar/>
      <div class="container">
          <div class="title">
              <h4 class="title-heading">FESTIVAL</h4>
              <h2 class="title-heading">CORDILLERA</h2>
              <h3 class="title-sub-heading">PARQUE SIMON BOLIVAR | SEPTIEMBRE 24 Y 25, 2022</h3>
              
          </div>
          <div class="cta">
              <p  class="cta-link">Ver Leanup</p>
              <p class="cta-linkTwo">Entradas</p>
          </div>
      </div> 
   </section>
        
    </header>
  )
}

export default Header
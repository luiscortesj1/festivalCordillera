import React from 'react'
import fotoOne from '../../assets/fotomanifesto1.jpg'
import fotoTwo from '../../assets/fotomanifesto2.jpg'
import cordillera from '../../assets/fondo_cordillera_florecera.png'

const Manifiesto = () => {
  return (
    <section>
        <div className="manifiesto">
            <div className="manifiestoText">
                <h2>Manifiesto</h2>
                
                    <p>SELVATICOS. MISTICOS. POLITICOS.ECOLOGICOS. Y EN ESPAÑOL. ASI SOMOS. ASI ES ESTA CORDILLERA DE SONIDOS,
                    PREGONES Y NATURALEZA VIVA.</p>
                
            </div>
            <div className="manifiestoPhotos">
                <img src={fotoOne}/>
                <img src={fotoTwo}/>
            </div>
        </div>
          <div className='topManifiesto'><img src={cordillera}/></div>  
    </section>
  )
}

export default Manifiesto
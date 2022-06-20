import React from 'react'
import artistas from '../../assets/lineupdesktop.png'
import spotyfy from '../../assets/iconos/spoty.svg'
export const ListArtistas = () => {
  return (
    <section className="list">
        <div className="sectionList">
            <div className="title">LineUp</div>
            <div><img src={artistas} alt=""/></div>
            <div className="subtitle">PARQUE SIMON BOLIVAR. 24 Y 25 DE SEPTIEMBRE, 2022.</div>
            <div className="playlist">Oye la playlist oficial de Cordillera</div>
            <div className="spotyfy"><img src={spotyfy} alt=""/></div>
        </div>
    </section>
  )
}

export default ListArtistas
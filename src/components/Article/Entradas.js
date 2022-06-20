import React from 'react'

export const Entradas = () => {
  return (
    <section>
        <div className="entradas">
            <div className="title">Entradas</div>    
            <div className="subtitle">Combos(2 DIAS)</div>
            <div className="boletas">
                <div>
                <h2>General</h2>
                <div>
                    <div>ETAPA 1</div>
                    <div>ETAPA 2</div>
                    <div>ETAPA 3</div>
                </div>
                </div>
                <div>
                <h2>VIP</h2>
                <div>
                    <div>ETAPA 1</div>
                    <div>ETAPA 2</div>
                    <div>ETAPA 3</div>
                </div>
                </div>
                <div></div>
            </div>   
            <div className="containerMore">
            <div className="more">Ver Mas</div>
            </div>
        </div>
    </section>
  )
}

export default Entradas
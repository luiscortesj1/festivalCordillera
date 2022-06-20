import React from 'react'
import ListArtistas from './ListArtistas'
import Artistas from './Artistas'
import Entradas from './Entradas'
import Manifiesto from './Manifiesto'
import Cordillera from './Cordillera'
import Comunidad from './Comunidad'
import Banner from './Banner'
export const Article = () => {
  return (
    <article>
       <ListArtistas/>
       <Artistas/>
       <Entradas/>
       <Manifiesto/>
       <Cordillera/>
       <Comunidad/>
       <Banner/>
    </article>
  )
}

export default Article
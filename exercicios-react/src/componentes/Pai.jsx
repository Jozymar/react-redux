import React from 'react'
import Filho from './Filho'

export default props => {
  //  let lugarInformado = 'Nenhum'
         // lugarInformado = lugar alert(`Liberado para ${lugar}`
            // console.log(lugarInformado) 
    const notificarSaidaDoFilho = lugar => 
        alert(`Liberado para ${lugar}`)
    return (
        <div>
            {/* lugarInformado */}
            <Filho notificarSaida={notificarSaidaDoFilho} />
        </div>
    )
}
import React, { useState, useEffect } from 'react'

export default props => {
    //let contador = 3
    const [contador, setContador] = useState(100)
    const [parOuImpar, setParOuImpar] = useState('Par')

    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par') :
            setParOuImpar('Impar')
    })

    return (
        <div>
            <h1>{contador}</h1>
            <h3>{parOuImpar}</h3>
            <button onClick={() => setContador(contador + 1)}>
                Inc
            </button>
            <button onClick={() => setContador(contador - 1)}>
                Dec
            </button>
        </div>
    )
}
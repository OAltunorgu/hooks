import React, { useState } from 'react'

const FunctionSayac = () => {
    const [sayac, setSayac] = useState(0)

    return (
        <div>
            <h1>Function Sayac(Hook Kullanan)</h1>
            <h1>{sayac}</h1>
            <button onClick={() => setSayac(prevSayac => prevSayac + 1)}>+1</button>
            <button onClick={() => setSayac(prevSayac => prevSayac + 2)}>+2</button>
            <button onClick={() => setSayac(prevSayac => prevSayac + 3)}>+3</button>
        </div>
    )
}

export default FunctionSayac;
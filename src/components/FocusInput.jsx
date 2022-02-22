import React, { useState, useRef, useEffect } from 'react'

const FocusInput = () => {
    const [name, setName] = useState("");
    const inputRef = useRef(null);
    const sayac = useRef(0);//Sayac amacımız focus olayı sonrası render etmediğini göstermektir.

    const focus = () => {
        inputRef.current.focus();
    }

    useEffect(() => {
        sayac.current = sayac.current + 1; //const [name, setName] = useState(""); ve burada amaç render işlemi yapıldığını 
        //görmek ama focus işleminde useRef'te render yok onu göstermek istiyoruz. useRef sadece referansın current değeri değiştirir.
    })

    return (
        <React.Fragment>
            <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => focus()}>Odakla</button>
            <h1>{sayac.current}</h1>
        </React.Fragment>
    )
}

export default FocusInput;
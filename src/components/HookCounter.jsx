import React, { useState, useEffect } from 'react'

const HookCounter = () => {
    const [counter, setCounter] = useState(0);//İlk değerimiz 0 olsun.
    const [name, setName] = useState("");

    //useEffect sadece istenilen durumda çağrılsın diğer durumlarda çağrılmasın koşulunu yapacağız. useEffect sonunda parametre alıyor.
    //counter parametresini verdik burada ve bu counter her değiştiğinde bu alanı çağır diğer zamanlarda çağırma demektir.
    useEffect(() => {
        console.log("Güncelleniyor.");
        document.title = `${counter}`;
    }, [counter, name])//Birden fazla yapı olabilir counter veya name değeri değişirse çağır demektir.
    return (
        <div>
            <h1>HookCounter ile Sayaç Örneği</h1>
            <h1>{counter}</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        </div>
    )
}
export default HookCounter;
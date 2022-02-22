import React, { useEffect } from 'react'

const SayHello = () => {
    useEffect(() => {
        const interval = setInterval(sayHello, 1000); // sayHello metodunu/fonksiyonunu saniye 1 kez çalıştır.

        return () => {
            clearInterval(interval);//Bu işlem ile butona tıklayınca işlemin temizlenmesini sağlıyoruz.
        }
    }, [])

    const sayHello = () => {
        console.log("Hello!")
    }

    return (
        <div>SayHello</div>
    )
}

export default SayHello
import React, { useState } from 'react'

const FunctionSayac = () => {

    //useState hook'u içine aldığı arguman en başta component render edilince sayacımın 0 ile başlamasını istiyorum. 
    //useState ise bana 0 değeri ile başlayan değişkenimi(sayac'ı) ve update edebilmek için bir metod döndürüyor bunun adı setSayac'tır.
    //onClick ile fonksiyonu çağrınca setSayac'ı (sayac+1) yapsın. Sayacı güncelleme metodunu kullanarak sayacın ilk değeri +1 yaptık.
    //+2 veya +3 işlemi için ayrı ayrı fonksiyon yazmadık. Çok kolay şekilde kullanabildik ama class componentte böyle olmaz.
    const [sayac, setSayac] = useState(0)

    return (
        <div>
            <h1>Function Sayac(Hook Kullanan)</h1>
            <h1>{sayac}</h1>
            <button onClick={() => setSayac(sayac + 1)}>+1</button>
            <button onClick={() => setSayac(sayac + 2)}>+2</button>
            <button onClick={() => setSayac(sayac + 3)}>+3</button>
        </div>
    )
}

export default FunctionSayac;
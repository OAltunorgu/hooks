import React, { useState } from 'react'

//Props olarak text'i ana componentten(App.js'den) alacağız.
const ReadMore = ({ text, max }) => {
    //Hidden değişkenim var ve bu bir boolean değişkendir. Hidden ilk değeri true olsun ve en başta saklasın.
    const [hidden, setHidden] = useState(true)

    if (text.length < max) {
        return <span>{text}</span>
    } else {

        return (
            <span>
                {hidden ? `${text.substr(0, max).trim()}...` : text}
                {hidden ?
                    (
                        <button onClick={() => setHidden(false)}>Daha Fazla Göster</button>
                    ) :
                    (
                        <button onClick={() => setHidden(true)}>Daha Az Göster</button>
                    )
                }
            </span>
        )
    }
}

export default ReadMore
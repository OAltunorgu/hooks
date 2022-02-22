import React, { useState, useMemo } from 'react'

//BEKLENTI; Pahalı işlem ile diğer işlem için render süresinde farkı görmek. 
//Her işlem aynı şekilde yavaş olmasın sadece pahalı yavaş olsun diğer işlemler etkilenmesin.
const MemoizedCounter = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    //Bu işlem pahalı yani zahmetli işlemdir.
    const areEvenNumber = useMemo(() => {
        console.log("Pahalı işlem çalışıyor.")
        let i = 1;
        while (i < 500000000) i++;
        return counterOne % 2 === 0;
    }, [counterOne])



    return (
        <React.Fragment>
            <div>
                {/* Zahmetli-Pahalı İşlem */}
                <button onClick={() => setCounterOne(counterOne + 1)}>{counterOne}</button>
                <span>{areEvenNumber ? "Çift" : "Tek"}</span>
            </div>
            <div>
                <button onClick={() => setCounterTwo(counterTwo + 1)}>{counterTwo}</button>
            </div>
        </React.Fragment>
    )
}

export default MemoizedCounter;
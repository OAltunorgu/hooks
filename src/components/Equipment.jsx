import React, { useState } from 'react'

const Equipment = () => {
    const [name, setName] = useState(""); //Boş bir string değişkeni tutuyorum.
    const [equipment, setEquipment] = useState([]);//Boş bir array tutuyorum.

    //addList form submit olduğu için event alır.
    const addList = (event) => {
        event.preventDefault();
        setEquipment(prevEquipment => [
            ...prevEquipment,
            { id: equipment.length, item: name }
        ]);
        setName("");
    }

    return (
        <React.Fragment>
            <form>
                <input name='equipment' type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </form>
            <button onClick={addList}>Add</button>


            <ul>
                {
                    equipment.map(equipment => (
                        <li key={equipment.id}>{equipment.item}</li>
                    ))
                }
            </ul>
        </React.Fragment>
    )
}

export default Equipment;
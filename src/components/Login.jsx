import React, { useState } from 'react'

const Login = () => {
    const [fullName, setFullName] = useState({
        name: "",
        surname: ""
    });

    //State'i olduğu gibi kopyala sadece güncellemek istenen değeri event.target.value değerine eşitle.

    return (
        <form>
            <input
                name="name"
                type="text"
                value={fullName.name}
                onChange={event => setFullName({ ...fullName, name: event.target.value })}>
            </input>
            <br />
            <input
                name="surname"
                type="text"
                value={fullName.surname}
                onChange={event => setFullName({ ...fullName, surname: event.target.value })}>
            </input>

            <div>
                Ad: {fullName.name} <br />
                Soyad: {fullName.surname}
            </div>
        </form>
    )
}

export default Login
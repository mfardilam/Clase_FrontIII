import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DigApi = () => {
    const [dog, setDog] = useState({})
    const [change, setChange] = useState(false)
    const url = 'https://dog.ceo/api/breeds/image/random'

    useEffect(()=>{
        //para que lo haga una sola vez y no cada vez que se setea dog
        axios(url)
        .then(response => setDog(response.data))
    }, [change])

    return (
    <div>
        <button onClick={() => setChange(!change)}>Cambiar perrito</button>
        <img src={dog.message} alt=""/>
    </div>
    )
}

export default DigApi
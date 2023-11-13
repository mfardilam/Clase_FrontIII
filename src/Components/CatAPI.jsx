import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CatAPI = () => {
    const url = 'https://api.thecatapi.com/v1/images/search'
    const [change, setChange] = useState(false)
    const [cat, setCat] = useState({})

    useEffect(()=>{
        axios(url)
        .then(response => setCat(response.data[0]))
    },[change])
    return (
        <div>
            <button onClick={() => setChange(!change)}>Cambiar perrito</button>
            <img src={cat.url} alt=""/>
        </div>
        
    )
}

export default CatAPI
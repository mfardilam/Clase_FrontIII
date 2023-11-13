import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Clase10 = () => {
    const [chars, setChars] = useState([])
    const url = 'https://rickandmortyapi.com/api/character/'

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then((data)=>{
            console.log(data.results);
            //Esto va en un UseEfect para que esta linea, por ciclo de vida, no entre en un bucle inf
            setChars(data.results);
        })
        //No funciono jeje, pero lo va a revisar
        .catch(err=>console.log(err)) 
    }, [])

    return (
    <div>
        Aca se va a traer la info
        {(chars.length > 0 && chars) && chars.map((char)=>{
            return <div key={char.id}>
                <h3>{char.name}</h3>
                <img src={char.image}/>
            </div>
        })

        }
    </div>
    )
}

export default Clase10
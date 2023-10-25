import { useState } from 'react'
import FormUsuario from './FormUsuario'

const FormularioPokemon = () => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        edad: '',
        pokemonFav: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSumbit = (event) => {
        event.preventDefault()
        const regex = /^[A-Za-z]{3,}( [A-Za-z]+)?$/
        if(regex.test(usuario.nombre)){
            setShow(true)
            setError(false)
        } else {
            setError(true)
            setShow(false)
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSumbit}>
                <label>Nombre</label>
                <input type="text" value={usuario.nombre} onChange={(event) => setUsuario({...usuario, nombre: event.target.value})} />
                <label>Edad</label>
                <input type="text" value={usuario.edad} onChange={(event) => setUsuario({...usuario, edad: event.target.value})}/>
                <label>Pokemon favorito</label>
                <input type="text" value={usuario.pokemonFav} onChange={(event) => setUsuario({...usuario, pokemonFav: event.target.value})}/>
                <button>Enviar</button>
                
            </form>
            {show && <FormUsuario nombre={usuario.nombre} edad={usuario.edad} pokemon={usuario.pokemonFav} />}
            {error && <h5 style={{color: 'red'}}>Verifique bien los datos antes de enviar</h5>}
        </div>
    )
}

export default FormularioPokemon
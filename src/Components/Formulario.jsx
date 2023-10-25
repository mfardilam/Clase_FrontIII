import { useState } from 'react'
import Envio from './Envio'

const Formulario = () => {
    const [cliente, setCliente] = useState({
        nombre: '',
        direccion: ''
    })
    //    const [nombre, setNombre] = useState('')
//    const [direccion, setDireccion] = useState('')
   const [show, setShow] = useState(false)
   const [error, setError] = useState(false)

    // const reset = () => {
    //     setNombre('')
    //     setDireccion('')
    // }

    const handleSumbit = (event) => {
        event.preventDefault()
        const regex = /^[A-Za-z]{3,}( [A-Za-z]+)?$/
        if(cliente.direccion.length > 5 && cliente.direccion.includes(' ') && regex.test(cliente.nombre)){
            setShow(true)
            setError(false)
        } else {
            setError(true)
            setShow(false)
        }
       
    }

  return (  
    <div >
        {!show && 
            <form onSubmit={handleSumbit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <label>Nombre</label>
                <input type="text" value={cliente.nombre} onChange={(event) => setCliente({...cliente, nombre: event.target.value})}/>
                <label>Dirección</label>
                <input type="text" value={cliente.direccion} onChange={(event) => setCliente({...cliente, direccion: event.target.value})}/>
                <button>Enviar</button>
            </form>}
        {/* <button onClick={reset}>Reset</button> */}
        {show && <Envio nombre={cliente.nombre} direccion={cliente.direccion} />}
        {error && <h5 style={{color: 'red'}}>Verifique bien los datos antes de enviar</h5>}
    </div>
  )
}

export default Formulario


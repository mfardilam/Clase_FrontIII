import React from 'react'

const FormUsuario = ({nombre, edad, pokemon}) => {
    return (
        <div>
            <h3>Gracias {nombre} por llenar el formulario</h3>
            <h4>Nos encanta saber que tu pokemon favorito es {pokemon}</h4>
        </div>
    )
}

export default FormUsuario
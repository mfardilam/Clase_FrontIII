import React from 'react'


const Header = () => {
    let variable = ' '
    const titulos = ['Home',  'Shop', 'Contact', 'About']
    const styles = {
      // Lo mismo que linea 15
      // backgroundColor: variable ? 'black' : 'white',
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-around'
    }

    if(variable) {
      styles.backgroundColor = 'white'
    } else { //Si variable es null, false, '', 0 o undefined
      styles.backgroundColor = 'black'
    }

  return (
    <div style={styles}>
        {titulos.map((titulo, index) => {
            return <h5 key={index}>{titulo}</h5>
        })}
    </div>
  )
}

export default Header


// Operador ternario
// {condicion ? true : false}
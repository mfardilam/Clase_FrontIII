import { useState } from 'react'
import '../styles/Card.css'

const Card = ({plato, setPedidos}) => {
  const { id, img, tipo, precio} = plato
  const [count, setCount] = useState(0)

  const sumar = () => {
    setCount((prev) => prev + 1)
  }
  const restar = () => {
    setCount(count-1)
  }

  return (
    <div className='card'>
        <img src={img} alt="" className='card-img'/>
        <h3>{tipo}</h3>
        <h4>{precio}</h4>
        <div className='buttons'>
          <button onClick={restar} disabled={count==0}>-</button>
          <h3>{count}</h3>
          <button onClick={() => setCount(count+1)}>+</button>
        </div>
        <button onClick={() => setPedidos((prevState) => {
          return [...prevState, plato]
          })}>Agregar pizza</button>
    </div>
  )
}

export default Card
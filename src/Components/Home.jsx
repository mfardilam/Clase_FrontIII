import { useState } from 'react'
import imgpizza from '../assets/pizza_de_mozzarella (1).jpg'
import Card from './Card'
import Formulario from './Formulario'
import { home, titulo, item } from '../styles/Home.module.css'

const Home = () => {
    const [pedidos, setPedidos] = useState([])
    let pizzas = [
        { id: 1, tipo: 'Muzzarella', precio: '$1200', img: imgpizza },
        { id: 2, tipo: 'Fugazza', precio: '$1250', img: 'https://cdn0.recetasgratis.net/es/posts/7/0/2/pizza_fugazza_7207_600.webp' },
        { id: 3, tipo: 'Napolitana', precio: '$1350', img: 'https://img-global.cpcdn.com/recipes/5fb5d55852fa8d06/640x640sq70/photo.webp' },
        { id: 4, tipo: 'Rucula y crudo', precio: '$1500', img: 'https://pizzasargentinas.com/wp-content/uploads/2020/12/rucula-y-jamon-crudo.jpg' },
        { id: 5, tipo: 'Especial', precio: '$1400', img: 'https://saboresmendoza.com/wp-content/uploads/2019/09/pizza.jpg' },
    ]
    console.log(pedidos)
  return (
    <div className={home}>
        <h1 className={titulo}>Sección pizzeria</h1>
        <h3>Pedidos</h3>
        <ul>
          {pedidos.map(pedido => <li className={item} key={pedido.id}>{pedido.tipo}</li>)}
        </ul>
        {pedidos.length > 0 ? <Formulario/> : null}
        
        {pizzas.map(pizza => <Card setPedidos={setPedidos} plato={pizza} key={pizza.id}/>)}
    </div>
  )
}

export default Home
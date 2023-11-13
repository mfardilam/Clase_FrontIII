import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='navbar'>
            <Link to='/'><h4>Home</h4></Link>
            <Link to='/contact'><h4>Contact</h4></Link>
            <Link to='/about'><h4>About</h4></Link>

            <button onClick={() => navigate('/')}>Volver al inicio</button>
        </div>
    )
}

export default Navbar
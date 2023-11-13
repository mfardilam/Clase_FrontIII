import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import FormularioPokemon from './Components/FormularioPokemon'
import CatAPI from './Components/CatAPI'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Navbar from './Components/Clase11/Navbar'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App

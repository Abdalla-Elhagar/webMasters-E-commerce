import { Route,Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Home from './pages/home'
import About from './pages/about'
import Cart from './pages/cart'
import Concat from './pages/concat'
import Favorite from './pages/favorite'
import LogIn from './pages/logIn'
import Register from './pages/register'

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/cart' element={<Cart />} /> 
        <Route path='/concat' element={<Concat />} /> 
        <Route path='/favorite' element={<Favorite />} /> 
        <Route path='/logIn' element={<LogIn />} /> 
        <Route path='/register' element={<Register />} /> 
      </Routes>
    </>
  )
}

export default App

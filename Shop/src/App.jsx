import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import PlaceOrader from './Pages/PlaceOrader'
import Orders from './Pages/Orders'

const App = () => {
  return (
    <div className='overflow-hidden bg-white dark:bg-gray-900 dark:text-white duration-200'>
     <Navbar/>
     {/* <Hero/> */}
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route  path='/shop' element={<Shop/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/product/:productId' element={<Product/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/place-order' element={<PlaceOrader/>}/>
         <Route path='/orders' element={<Orders/>}/>
     </Routes> 
    </div>
  )
}

export default App
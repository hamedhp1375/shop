import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/home/Home"
import About from '../pages/about/About'
import Contact from "../pages/Contact/Contact"
import Portfolio from "../pages/Portfolio/Portfolio"
import Services from '../pages/Services/Services'
import Cart from '../pages/cart/Cart'
import Shop from '../pages/Shop/Shop'

function Routerdom() {
  return (
 <Routes>
    <Route path="/Home" element={<Home />} />
   <Route path="/About" element={<About />} />
   <Route path="/Contact" element={<Contact />} />
   <Route path="/Portfolio" element={<Portfolio />} />
   <Route path="/Services" element={<Services />} />
   <Route path="/Cart" element={<Cart />} />
   <Route path="/Shop" element={<Shop />} />
   
 </Routes>
  )
}

export default Routerdom
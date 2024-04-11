import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Header from './component/Header'
import About from './component/About/About'
import Contact from './component/About/Contact.jsx'
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        
      </Routes>
    </div>
  )
}

import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Gallery from './pages/Gallery'
import DetailPage from './pages/DetailPage'
import Admin from './pages/Admin'


function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/booking' element={<Booking/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/deatilPage' element={<DetailPage/>}/>
    <Route path='/admin' element={<Admin/>}/>
    </Routes>
      
    </>
  )
}

export default App

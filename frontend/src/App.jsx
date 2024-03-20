import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Gallery from './pages/Gallery'
import DetailPage from './pages/DetailPage'
import Admin from './pages/Admin'
import About from './pages/About'
import BookingDetail from './pages/BookingDetail'


function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/booking' element={<Booking/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/boot/:id' element={<DetailPage/>}/>
    <Route path='/reservierungen/:id' element={<BookingDetail/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
      
    </>
  )
}

export default App

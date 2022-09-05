
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'
import Trainers from './pages/trainers/Trainers'
import Plans from './pages/plans/Plans'
import Gallery from './pages/gallery/Gallery'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/about' element={<About/>} /> 
        <Route path='/contact' element={<Contact/>} /> 
        <Route path='/gallery' element={<Gallery/>} /> 
        <Route path='/plans' element={<Plans/>} /> 
        <Route path='/traines' element={<Trainers/>} /> 
        <Route path='*' element={<NotFound/>} /> 
      </Routes>

    </BrowserRouter>
  )
}

export default App
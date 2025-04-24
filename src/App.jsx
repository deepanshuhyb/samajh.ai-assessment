import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './Home'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/assignment' element={<h1>About</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

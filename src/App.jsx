import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './Home'
import Assignment from './Assignment'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/assignment' element={<Assignment />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

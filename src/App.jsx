import react, { useState } from 'react'
import './App.css'
import { Box } from '@mui/material'
import { Navbar, Footer } from './Components'

import { Home } from './Pages'
import { Routes, Route } from 'react-router-dom'
import { ExerciseDetails } from './Pages'

function App() {

  return (
    <Box width="400px" sx={{width : {xl: '1448px'}}} m="auto" className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" element = { <Home/>} />
        <Route path = "/exercise/:id" element = { <ExerciseDetails/> } />
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App

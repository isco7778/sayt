import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Sale from './pages/Sale'
import NewTrending from './pages/NewTrending'


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path='/Men' element={<Men/>} />
            <Route path='/Women' element={<Women/>}/>
            <Route path='/Kids' element={<Kids/>} />
            <Route path='/Sale' element={<Sale/>} />
            <Route path='/NewTrending' element={<NewTrending/>} />
          </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
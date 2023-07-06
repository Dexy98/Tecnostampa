import React from 'react'
import "./App.css"
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header/Header'
import Storia from './Routes/Storia/Storia'
import Home from './Routes/Home/Home'
import Footer from './component/Footer/Footer'
import Shop from './Routes/Shop/Shop' 
const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header />

        <Routes>
          <Route path='/Tecnostampa/Home' element={<Home />}> </Route>
          <Route path='/Storia' element={<Storia />}> </Route>
          <Route path='/Shop' element={<Shop />}> </Route>

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App


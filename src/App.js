import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"
import "./index.css"
import data from "./data"
import Header from './component/Header/Header'
import Storia from './Routes/Storia/Storia'
import Home from './Routes/Home/Home'
import Footer from './component/Footer/Footer'
import Shop from './Routes/Shop/Shop'
const App = () => {
  const [item, setItem] = useState(data)
  return (
    <Router>
      <div className='container'>
        <Header />

        <Routes>
          <Route path='/tecnostampa' exact element={<Home />}> </Route>
          <Route path='/Storia' element={<Storia />}> </Route>
          <Route path='/Shop' element={<Shop data={item}/>}> </Route>

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App


import React from 'react'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import Product from './Product/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Item from './Product/Product'

const App = () => {
  
  
  return <div>
    <Router>
      <Navbar />
      <Routes>
        <Route  path='/message' element={<Message />}/>
        <Route  path='/product' element={<Product />}/>
      </Routes>
    </Router>
    </div>
  
}

export default App

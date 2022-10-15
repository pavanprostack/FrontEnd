import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import CreateProduct from './Product/CreateProduct'

const App = () => {
    return <>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/home' element={<CreateProduct />} />
            </Routes>
        </Router>
    </>

}

export default App

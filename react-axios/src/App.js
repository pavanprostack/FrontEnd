import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import User from './User/User'
import Using_componentlifecycle from './User/Using_componentlifecycle'
import Product from './Product/Product'



class App extends React.Component {
    render() {
        return <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='user' element={<Using_componentlifecycle />} />
                    <Route path='product' element={<Product />}/>
                </Routes>
            </Router>
        </>
    }
}
export default App
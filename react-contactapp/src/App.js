import React from 'react'
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import ContactApp from './ContactApp/ContactApp'


class App extends React.Component{
    render(){
        return <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="contact" element={<ContactApp />} />
            </Routes>
        </Router>
        </>
    }
}
export default App
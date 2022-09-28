import React from 'react'
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Contacts from './Contacts/Contacts'
import ContactList from './ContactList/ContactList'


class App extends React.Component{
    render(){
        return <>
        <Router>
            <Navbar />
            <Routes>
                <Route path='contacts' element={<Contacts />} />
                <Route path ='contactlist' element={<ContactList />} />
            </Routes>
        </Router>
        </>
    }
}
export default App
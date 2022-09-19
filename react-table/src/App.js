import React from 'react'
import Navbar from './Navbar/Navbar'
import Employee from './Employee/Employee'

class App extends React.Component{
    render(){
            return <div>
                <Navbar />
                <h1>React Table</h1>
                <Employee />
            </div>
    }
}
export default App
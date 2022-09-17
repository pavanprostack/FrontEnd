import React from 'react'

import Navbar from './Navbar/Navbar'

import UpdateMsg from './EmployeesForceUpdate/UpdateMsg'

import UpdateMessage from './EmployeesStateUpdate/UpdateMessage'

class App extends React.Component{
    render(){
        return <div>
            <Navbar />
            <div className='container mt-5'>
            <h1>Iam Learning State Concept in React</h1>
            <UpdateMsg />
            <UpdateMessage />

            </div>           
        </div>
    }
}
export default App
import React  from 'react'
import Navbar from './Navbar/Navbar'
import FormValidation from './FormValidation/FormValidation'


    class App extends React.Component {
  render() {
    return (
        <div>
              <Navbar />
              <h1>Form validations</h1>
              <FormValidation />
        </div>
      
    )
  }
}

 export default App
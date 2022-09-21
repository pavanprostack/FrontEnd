import React  from 'react'
import Navbar from './Navbar/Navbar'
// import FormValidation from './FormValidation/FormValidation'
import RegistrationForm from './RegistrationForm/RegistrationForm'


    class App extends React.Component {
  render() {
    return (
        <div>
              <Navbar />
              <h1 className='text-primary'><i>Registration Form</i></h1>
              {/* <FormValidation /> */}
              <RegistrationForm />
        </div>
      
    )
  }
}

 export default App
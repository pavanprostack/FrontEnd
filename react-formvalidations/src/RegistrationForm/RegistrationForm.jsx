import React from 'react'

class RegistrationForm extends React.Component{
    state ={
        firstName : "",
        lastName : "",
        company : "",
        email : "",
        areaCode : "",
        phoneNumber : "",
        subject : ""
    }
    eventHandler = (event)=>{
        this.setState({firstName:event.target.value})
    }
    render(){
        return <div className="container mt-5">
            <pre>{JSON.stringify(this.state)}</pre>
        <div className="row">
            <div className="col-md-6">
                <div className="card-header bg-warning text-center" >
                    <h2>Event Registration Form</h2>
                </div>
                <div className="card-body bg-info">
                <div className="row">
                <div className="col-2">
                    <label><b>Name</b></label>
                </div>
                <div className="col-5 form-group">
                    <input type="text" placeholder='FirstName' onChange={this.eventHandler} className='form-control' />
                </div>
                <div className="col-5 form-group">
                <input type="text" placeholder='LastName' onChange={this.eventHandler} className='form-control' />
                </div>
                <div className="col-2">
                    <label><b>Company</b></label>
                </div>
                <div className="col-10 form-group">
                    <input type="text" className='form-control' onChange={this.eventHandler} />
                </div>
                <div className="col-2">
                    <label><b>Email</b></label>
                </div>
                <div className="col-10 form-group">
                    <input type="text" className='form-control' onChange={this.eventHandler} />
                </div>
                <div className="col-2">
                    <label><b>Phone</b></label>
                </div>
                <div className="col-3 form-group">
                    <input type="text" className='form-control' onChange={this.eventHandler} placeholder='Areacode'/>
                </div>
                <div className="col-7 form-group">
                    <input type="text" className='form-control' onChange={this.eventHandler} placeholder='Phone Number' />
                </div>
                <div className="col-2">
                    <label><b>Subject</b></label>
                </div>
                <div className="col-10 form-group">
                    <select className='form-control' onChange={this.eventHandler}>
                        <option>Choose Option</option>
                        <option>Software Developer</option>
                        <option>Software Test Engineer</option>
                        <option>Cloud Developer</option>
                        <option>FrontEnd Developer</option>
                    </select>
                </div><br /><br /><br /><br />
                <div className='col-12'>
                     <h6><strong>Are you an existing customer? </strong></h6>
                     <input type="radio" /> Yes &nbsp;&nbsp;&nbsp;&nbsp;
                     <input type="radio" /> No  
                </div><br /><br /><br /><br />
                <div className="col-4 form-group">
                      <input type="Submit" value="Registration" className='form-control btn btn-danger' />  
                </div>             
             </div>
                </div>
              
          </div>
        </div>
     </div>
    }
}
export default RegistrationForm
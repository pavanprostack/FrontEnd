import React, { Component } from 'react'


class ContactList extends Component {
  getUser = (user)=>{
    this.setState(console.log(user))
    this.props.method1(user);
  }
  render() {
    return <>
    {/* <pre>{JSON.stringify(this.props.pavan)}</pre> */}
    {/* <pre>{JSON.stringify(this.props)}</pre> */}
    <div className="container">
      <div className="row">
        <div className="col">
          <table className='table table-hover'>
            <thead className='bg-primary text-white'>
              <tr>
                <th>Id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Gender</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.pavan.users.map((user, index)=>{
                  return <tr key={index} onMouseOver={this.getUser.bind(this, user)}>
                    <td>{user.id}</td>
                   <td>{user.firstName}</td>
                   <td>{user.lastName}</td>
                   <td>{user.gender}</td>
                   <td>{user.email}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  }
}

export default ContactList
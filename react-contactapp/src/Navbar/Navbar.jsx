import React from 'react'
import {Link} from 'react-router-dom'


class Navbar extends React.Component{
    render(){
        return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to="#" className='navbar-brand'>Contact App</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-list'><Link to="contacts" className='nav-link'>Contacts</Link></li>
                    <li className='nav-list'><Link to="contactlist" className='nav-link'>ContactList</Link></li>
                    <li className='nav-list'><Link to="contactdetails" className='nav-link'>ContactDetails</Link></li>
                </ul>
            </div>
            
        </nav>
    }
}
export default Navbar
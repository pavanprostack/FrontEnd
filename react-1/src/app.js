
import React from 'react'

class App extends React.Component{

    id=101;
    name="Pavankalyan"
    image = "PowerStar"

    render(){
        return <div>
                   <nav className='navbar navbar-dark bg-dark'>
                    <a className='navbar-brand' href='#'>Employee Details</a>

                   </nav>

                   <h3 className='mt-5'>eId:{this.id}</h3>
                   <h3>eName:{this.name}</h3>
                   <img src='https://wallpaperaccess.com/full/1401333.jpg' alt='PowerStar'></img>

               </div>
    }
}
export default App
import React from 'react'
import Navbar from './Navbar/Navbar'
// import Message from './Message/Message'
import ProductTable from './ProductTable/ProductTable'

class App extends React.Component{
    render(){
            return <div>
                <Navbar />
                <h1>React Table</h1>
                {/* <Message /> */}
                {/* <Product /> */}
                <ProductTable />
            </div>
    }
}
export default App
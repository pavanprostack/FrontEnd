import React, { Component } from 'react'
import Axios from 'axios'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'

export class ProductApp extends Component {
    constructor(props){
        super(props)
        this.state = {
            products : {}
        }
    }
    componentDidMount =()=>{
        Axios.get('https://dummyjson.com/products').then((response)=>{
            this.setState({products:response.data})
        }).catch(()=>{})
    }
  render() {
    return  <div>
        <h1>Product App</h1>
        <pre>{JSON.stringify(this.state.products)}</pre>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h1>Product List</h1>
                    {
                        Object.keys(this.state.products).length > 0 ?
                         <>
                         <ProductList productDetails={this.state.products} />
                         </> : null
                    }
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    </div>
     
    
  }
}

export default ProductApp




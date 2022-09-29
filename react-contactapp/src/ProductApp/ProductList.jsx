import React, { Component } from 'react'

class ProductList extends Component {
  render() {
    return <>
    <pre>{JSON.stringify(this.props)}</pre>
    </>
  }
}

export default ProductList

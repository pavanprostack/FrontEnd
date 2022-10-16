import React,{useState} from 'react'
import { useEffect } from 'react'
import Axios from 'axios'

const ProductList = () => {

    let [products, setProducts] = useState([])

    useEffect(()=>{
        let url='http://127.0.0.1:5000/api/products/'
        Axios.get(url).then((response)=>{
            setProducts(response.data);
        }).catch(()=>{})
    }, []);


  return <>
  <div className="container">
    <div className="row">
        {
             products.length > 0 ? 
             <>
             {
                 products.map((product)=>{
                     return   <div className="col-8">
                     <div className="card-header">
                         <img src={product.image} alt="img" />
                     </div>
                     <div className="card-body">
                        <ul className='list-group'>
                            <li className='list-group-item'>{product.productName}</li>
                        </ul>
                     </div>
                 </div>
                 })
             }
             </> : null
        }
      
    </div>
  </div>
  </>
}

export default ProductList

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { json } from 'react-router-dom'

const CreateProduct = () => {

  let [products, setProducts]= useState({
   productName : "",
   price : "",
   image : "",
   qty : "",
   info : ""

})


let updateHandler = (event)=>{
   setProducts({...products, [event.target.name] : event.target.value})
}

let submitHandler = (event)=>{
   event.preventDefault();
   alert(JSON.stringify(products));
}

  
    return <>
        <div className="container mt-5">
         <pre>{JSON.stringify(products)}</pre>
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h3>Create Product</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className='form-group'>
                                    <input type="text" onChange={updateHandler} name='productName' className='form-control' placeholder='Product Name' />
                                </div>
                                <div className='form-group'>
                                    <input type="number" onChange={updateHandler} name='price' className='form-control' placeholder='Price' />
                                </div>
                                <div className='form-group'>
                                    <input type="file" onChange={updateHandler} name='image' className='form-control-file' placeholder='Image' />
                                </div>
                                <div className='form-group'>
                                    <input type="number" onChange={updateHandler} name='qty' className='form-control' placeholder='Qty' />
                                </div>
                                <div className='form-group'>
                                    <input type="text" onChange={updateHandler} name='info' className='form-control' placeholder='Info' />
                                </div>
                                <input type="submit" className='btn btn-success' value='Create Product' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CreateProduct

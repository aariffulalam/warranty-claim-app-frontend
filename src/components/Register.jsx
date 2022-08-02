import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

import './register.css'
const Register = () => {
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name : "",
        email: "",
        number: "",
        distributor: "",
        product: "",
        orderNumber: "",
        serialNumber: "",
        purchaseDate: "",
        
    })

    function handleProduct(e){
        const name = e.target.name
        const value = e.target.value
        if(name === "distributor"){
            console.log(name, value)
        }
        setProduct({...product, [name]:value})
    }
    
    function submitRegistration(e){
        e.preventDefault()
        const url = "http://localhost:3000/warranty/register"
        axios.post( url, product)
        .then((response)=>{
            console.log(response)
            alert(response.data.message)
            navigate("/verify",{state:{orderNumber:product.orderNumber, serialNumber:product.serialNumber}})
        }).catch((error)=>{
            console.log(error)
            alert(error)
        })
    }

    return (
        <div className='make-it-center'>
          <form>
            <div className="container">
              <h1>Register</h1>
              <p>Please fill in this form to register your warranty</p>
              <hr />
    
              <label ><b>Name</b></label>
              <input className='input-group' onChange={handleProduct} type="text" placeholder="Enter name" name="name" required />
    
              <label ><b>Contact Number</b></label>
              <input className='input-group' onChange={handleProduct} type="text" placeholder="Enter number" name="number" required />
    
              <label ><b>Email</b></label>
              <input className='input-group' onChange={handleProduct} type="email" placeholder="Enter Email" name="email" required />
    
              <label ><b>Distributor</b></label>
              <select name="distributor" defaultValue="DEFAULT" onClick={handleProduct} className='input-group'>   
                <option value="DEFAULT" disabled selected>Choose one Distributor</option>
                <option value="flipkart">Flipkart</option>
                <option value="amazon">Amazon</option>
              </select>
    
              <label ><b>Product</b></label>
              <input className='input-group' onChange={handleProduct} type="string" placeholder="Product name" name="product" required />
    
              <label ><b>Purchase Date</b></label>
              <input className='input-group' onChange={handleProduct} type="date" placeholder="Enter your purchase date" name="purchaseDate" required />
              
              <label ><b>Order Number</b></label>
              <input className='input-group' onChange={handleProduct} type="string" placeholder="Enter product's order number" name="orderNumber" required />
              
              <label ><b>Serial Number</b></label>
              <input className='input-group' onChange={handleProduct} type="string" placeholder="Enter product's serial Number" name="serialNumber" required />
              
    
              <button type="submit" onClick={submitRegistration} className="registerbtn">Register</button>
            </div>
    
          </form>
        </div>
      )
}

export default Register
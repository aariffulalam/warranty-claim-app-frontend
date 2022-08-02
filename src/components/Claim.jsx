import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
// import './common.css'

const image = require("../images/IMG_20220727_192542.jpg");

const Claim = () => {
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name : "",
        email: "",
        number: "",
        distributor: "",
        product: "",
        invoice:[],
        orderNumber: "",
        serialNumber: "",
        purchaseDate: "",
        productGroup: "",
        problem: "",
        problemDescription: "",
        shippingAddress: "",
        pickupAddress: ""
    })

    function handleProduct(e){
        // console.log(e.target.name)
        // console.log(e.target.value)
        const name = e.target.name
        const value = e.target.value
        if (name === "purchaseDate"){
          console.log(value)
        }

  
        setProduct({...product, [name]:value})
        // console.log(product)
    }
    function handleInvoice(e){
        const name = e.target.name
        const file = e.target.files[0]
        // console.log(file)
        setProduct({...product, [name]:file})

    }

    function submiProduct(e){
        e.preventDefault()
        // console.log(product)
        const url = "http://localhost:3000/warranty/claim"
        axios.post( url, product, {
            headers:{
                "Content-type" : "multipart/form-data"
            }
        })
        .then((response)=>{
            console.log(response.data)
            alert(response.data)
            navigate("/")
        }).catch((error)=>{
            console.log(error)
            alert(error.response.data.message)
        })
    }

    return (

        <div className='make-it-center'>
          <form>
            <div className="container">
            <img src={image} alt='warranty clam' />
              <h1>Cliam Warranty</h1>
              <p>Fill this form for to claim your warranty</p>
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

              <label ><b>Product Group</b></label>
              <select name="productGroup" defaultValue="DEFAULT" onClick={handleProduct} className='input-group'>   
                <option value="DEFAULT" disabled selected>Choose one type</option>
                <option value="androidPhones">Android Phone</option>
                <option value="earPhones">Earphone</option>
                <option value="headPhones">headphone</option>
              </select>
    
              <label ><b>Product</b></label>
              <input className='input-group' onChange={handleProduct} type="string" placeholder="Product name" name="product" required />
              
              <label ><b>Problem</b></label>
              <select name="problem" defaultValue="DEFAULT" onClick={handleProduct} className='input-group'>   
                <option value="DEFAULT" disabled selected>Choose one Distributor</option>
                <option value="wrong item">Wrong Item </option>
                <option value="broken item">broken item deleverd</option>
                <option value="sound problem">sound problem</option>
              </select>

              <label ><b>Problem in description</b></label>
              <input className='input-group' onChange={handleProduct} type="text" placeholder="Enter your problem" name="problemDescription" required />
              
              <label ><b>Invoice</b></label>
              <input className='input-group' onChange={handleInvoice} type="file" placeholder="Product image" name="invoice" required />

              <label ><b>Purchase Date</b></label>
              <input className='input-group' onChange={handleProduct} type="date" placeholder="Enter your purchase date" name="purchaseDate" required />
              
              <label ><b>Order Number</b></label>
              <input className='input-group' onChange={handleProduct} type="string" placeholder="Enter product's order number" name="orderNumber" required />
              
              <label ><b>Serial Number</b></label>
              <input className='input-group' onChange={handleProduct} type="string" placeholder="Enter product's serial Number" name="serialNumber" required />

              <label ><b>Shipping Address</b></label>
              <input className='input-group' onChange={handleProduct} type="string" placeholder="Enter product's serial Number" name="shippingAddress" required />

              <label ><b>Pickup Address</b></label>
              <input className='input-group' onChange={handleProduct} type="string" placeholder="Enter product's serial Number" name="pickupAddress" required />
              <button type="submit" onClick={submiProduct} className="registerbtn">submit</button>
            </div>
          </form>
        </div>
    )
}

export default Claim
import axios from 'axios';
import React, {useState} from 'react'
import './common.css'

const image = require("../images/IMG_20220727_192542.jpg");

const Home = () => {

    const [product, setProduct] = useState({
        productName:"",
        productModel:""
    })

    function handleProduct(e){
        // console.log(e.target.name)
        // console.log(e.target.value)
        const name = e.target.name
        const value = e.target.value
        setProduct({...product, [name]:value})
        console.log(product)
    }

    function submiProduct(e){
        e.preventDefault()
        const url = "http://localhost:3000/warranty/first"
        axios.post(url,{
            productName : product.productName,
            productModel : product.productModel
        })
        .then((response)=>{
            console.log(response)
            alert(response.data.message)
        }).catch((error)=>{
            console.log(error)
            alert(error)
        })
    }

    return (
        <div className='parent'>
            <div className='child margin'>
                <div className='center margin'>
                    <img src={image} alt='warranty clam' />
                </div>
                <div>
                    <form className='center margin'>
                        <label htmlFor='productName' className='pp'>Product Name </label><br/>
                        <input htmlFor="productName" type="text" name='productName' onChange={handleProduct} placeholder='product name'></input> 
                        <br/>
                        <br/>
                        <label htmlFor="productModel" className='pp'>Product Model </label> <br />
                        <input htmlFor="productModel" type="text" name="productModel" onChange={handleProduct} placeholder="product model"></input>
                        <br/>
                        <br/>
                        <div>
                            <button onClick={submiProduct}>submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home
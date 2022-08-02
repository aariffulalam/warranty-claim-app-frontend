import React from 'react';
import { useNavigate } from 'react-router-dom';

import "./home.css"

const Home = () => {
    const navigate = useNavigate()
    function c (){
        navigate('/claim')
    }
    function r (){
        navigate('/register')
    }
    
    return (
        <div className="center main">
            <img className="img" alt='laptop' src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/content-block-lg-my-support.image.large_2x.png" width="500vw" />
            <h1>My Support</h1>
            <div>
                <p>
                    Get up to date information on your repairs, reservations, and tech
                </p>
                <p>
                    support cases. Purchase or register AppleCare products
                </p>
                <p>
                    And much more
                </p>
            </div>
            <div className="button">
                <div>
                    <button className='btn' onClick={r}>Register</button>
                    <p>
                        Register Your Warranty
                    </p>
                </div>
                <div>
                    <button className='btn' onClick={c}>Claim</button>
                    <p>
                        Claim Your Warranty
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
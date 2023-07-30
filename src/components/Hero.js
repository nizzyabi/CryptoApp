import React, { useState }from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img.png'

const Hero = () => {
    const [data, setData] = useState({
      email: '',
    });
  
    const {email} = data
    const handleChange = e => {
      setData({...data, [e.target.name]: e.target.value})
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('https://v1.nocodeapi.com/nizzyabz/google_sheets/QDAfyZOsXubHTmAc?tabId=Sheet1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify([[email, new Date().toLocaleString()]])
        }
      );
      await response.json();
      setData({...data, email: ""})
  
      } catch (err) {
        console.log(err);
      }
    }


    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p>Buy & Sell Crypto</p>
                    <h1>Invest in the newest cryptocurrencies today</h1>
                    <p>Buy, sell, & store thousands of cryptocurrencies</p>
                    <form className='input-container' onSubmit={handleSubmit}>
                        <input type='email' name='email' placeholder='Enter your email' className='email' onChange={handleChange} value={email}/>
                        <button className='btn'>Learn More</button>
                        
                        
                    </form>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
import React, { useState } from 'react';
import './Signup.css'
import Crypto from '../assets/trade.png'

const SignUp = () => {
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
    <div className='signup'>
        <div className='container'>
            {/* Left */}
            <div className='left'>
                <img src={Crypto} alt=''/>
            </div>
            {/* Right */}
            <div className='right'>
                <h2>Earn Money With Crypto.</h2>
                <p>Earn up to 20% anually on 50+ digital assets. Simply hold crypto & earn money passively</p>
                <form className='input-container' onSubmit={handleSubmit}>
                    <input
                      type='email'
                      className='email'
                      placeholder='Email' 
                      name='email'
                      value={email}
                      onChange={handleChange}/>
                    <button className='btn'>Learn More</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp

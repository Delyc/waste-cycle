import React from 'react'
import Footer from '../components/footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import '../styles/sign.css'
import pass from '../assets/pass.png'
import name from '../assets/name.png'
import mail from '../assets/mail.png'
import userType from '../assets/userType.png'
import signup from '../assets/sign.png'

function Sign() {
  return (
    <div>

        <NavBar />
        <div className='parent'>
        <div className='sgn'>
        <div className='img'>
            <h3>Circular </h3>
            <p> Lorem ipsum dolor sit amet, consect etur adipiscing elit. Nulla
      consectetu r tellus a velit lacinia. </p>
            <img src={signup} alt="" />

        </div>
        <div className='signup'>
        <h2>Sign up to circular</h2>
        
        <form action="">
            <img src={name} alt="" /><input type="text" placeholder='your name'/>
            <img className='mail' src={mail} alt="" /><input type="email" placeholder='Email' />
            <img className='pass' src={pass} alt="" /><input type="password" placeholder='Password' />
            <img className='user-icon' src={userType} alt="" /><select name="" id="" placeholder='user Type'>
            <option value="choose">choose user type ...</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            </select>
            <button>Sign up</button>
            <p>Already have an account? <span>Login</span></p>
        </form>
        </div>
        
        </div>
        </div>
        
      
        <Footer/>
    </div>
  )
}

export default Sign
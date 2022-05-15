import React from 'react'
import Footer from '../components/footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import '../styles/sign.css'
import pass from '../assets/pass.png'
import name from '../assets/name.png'
import mail from '../assets/mail.png'
import userType from '../assets/userType.png'
import signup from '../assets/sign.png'
import password from '../assets/forgot.webp'

function Forgot() {
  return (
    <div>

        <NavBar />
        <div className='parent-l'>
        <div className='sgn'>
        <div className='img-login'>
           
            <img src={password} alt="" />

        </div>
        <div className='login'>
        <h2>Request password reset</h2>
        
        <form action="">
           
            <img className='mail-l' src={mail} alt="" /><input type="email" placeholder='Email' />
          
            <button>Submit</button>
            
        </form>
        </div>
        
        </div>
        </div>
        
      
        <Footer/>
    </div>
  )
}

export default Forgot
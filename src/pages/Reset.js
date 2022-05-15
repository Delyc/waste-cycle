import React from 'react'
import Footer from '../components/footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import '../styles/sign.css'
import pass from '../assets/pass.png'
import name from '../assets/name.png'
import mail from '../assets/mail.png'
import userType from '../assets/userType.png'
import signup from '../assets/sign.png'

function Reset() {
  return (
    <div>

        <NavBar />
        <div className='parent-l'>
        <div className='sgn'>
        <div className='img-login'>
           
            <img src={signup} alt="" />

        </div>
        <div className='login'>
        <h2>Reset password</h2>
        
        <form action="">
           
            <img className='mail-l' src={pass} alt="" /><input type="password" placeholder='Password' />
            <img className='pass-l' src={pass} alt="" /><input type="password" placeholder='Confirm Password' />
            
            <button>Reset</button>
          
        </form>
        </div>
        
        </div>
        </div>
        
      
        <Footer/>
    </div>
  )
}

export default Reset
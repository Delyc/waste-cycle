import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className='contact'>
        <h3>Contact us</h3>
        <p>Have any question? We are glad t answer/assist you</p>
        <form action="">
            <input type="text" placeholder='full name' />
            <input type="email" placeholder='Email'/>
            <textarea name="" id="" cols="30" rows="10" placeholder=' your message here ...'></textarea>
            <button>Send</button>

        </form>
    </div>
  )
}

export default Contact
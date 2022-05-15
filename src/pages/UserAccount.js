import React from 'react'
import Burger from '../components/Burger'
import del from '../assets/del.jpg'
import '../styles/useraccount.css'

function UserAccount() {
  return (
    <div className='user-account'>
        <Burger />
        <div>
        <img className='profile' src={del} alt="" />
        <div className='action-acc'>
        <button className='edit-pro'>Edit</button>
        <button className='delete-acc'>Delete account</button>
        </div>

        <div>
            <h3>Delyce:</h3>
            <h3>37 <span>products</span></h3>
            <h3>30 <span>sold</span></h3>
            <h3>7 <span>in stock</span></h3>
        </div>
        <div className='per-info'>
            <p>Delyce Twizeyimana</p>
            <p>Twizeyimana</p>
            <p>+250 7810 93895</p>
            <p>delyce2002@gmail.com</p>
            <p>Seller</p>
            <button>Update information</button>
        </div>
     

        </div>
        
    </div>
  )
}

export default UserAccount
import React from 'react'
import './footer.css'
import link from '../../assets/link.png'
import phone from '../../assets/phone.png'
import twitter from '../../assets/twitter.png'
import email from '../../assets/email.png'
function Footer() {
  return (
   <footer>
       <div className='first-section'>
       <div>
       <div>
           <h1>Waste Cycle</h1>
           <p className='slogan'>We build connections around waste management</p>
       </div>
       <div className='about'>
           <h1>About us</h1>
           <p></p>
       </div>
       <div>
           <h1>Contact us</h1>
           <div className='con'>  <img src={phone} alt="" />
           <p>0781093895</p>

           </div>
         
          <div className='con'>
              <img src={email} alt="" />
              <p>delyce2002@gmail.com</p>
          </div>
       </div>

       </div>

       <div>
           <h1>Infomation</h1>
           <p>About us</p>
           <p>Testimonials</p>
           <div>
           <h1>Helpful links</h1>
           <p>supports</p>
           <p>Services</p>

       </div> 

       </div>
       {/* */}
       <div className='sub'>
           <h1>Subscribe More Info</h1>
           <form action="">
           <input type="email" placeholder='Enter your Email' />
           <button>Subscribe</button>
           </form>
           
       </div>
      
       </div>
       <hr />
       <div className='ftr'>
       <div className='fholder'></div>
       <div className='follow'>
       <div className='social'> 
       <img src={link} alt="" />
       <img src={twitter} alt="" /></div>
       <p>copy right</p>
       </div>
       </div>
       
       
      
      
 
   </footer>
  )
}

export default Footer
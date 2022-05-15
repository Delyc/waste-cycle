import React from 'react'
import next from '../../assets/next.png'
import prev from '../../assets/prev.png'
import prod from '../../assets/prod.jpg'
import './Product.css'

function Product() {
  return (
    <div className='product'>
        <div className='single-product'>
            <h3> HL-T4000DW INK TANK PRINTER</h3>
            <div className='price'>
                <p>50$</p>
                <img src={prod} alt="" /> </div>
        
        <button>View Product</button>
        </div>
 
    </div>
  )
}

export default Product
import React from 'react'
import '../../SASS/index.css'


const Part2 = () => {
  return (
    <div className='Part2div'>
      <div className='Part2div__subdiv'>
<div className='Part2div__block'>
    <img width={100} height={200} src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf'/>
    <h4>No Minimum Order</h4>
    <p>Order in for yourself or for the group, with no restrictions on order value</p>
    </div>
    <div className='Part2div__block'>
    <img width={100} height={200} src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy'/>
    <h4>Live Order Tracking</h4>
    <p>Know where your order is at all times, from the restaurant to your doorstep</p>
    </div>
    <div className='Part2div__block'>
    <img width={100} height={200} src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn'/>
    <h4>Lightning-Fast Delivery</h4>
    <p>Experience Swiggy's superfast delivery for food delivered fresh & on time</p>
    </div>
    </div>
    </div>
  )
}

export default Part2
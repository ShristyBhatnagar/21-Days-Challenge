import React from 'react'
import '../../SASS/index.css'


const Part3 = () => {
  return (
    <>
      <div className='Part3Container'>
        <div className='Part3Container__Part3content1'>
          <h1 className='h1tag'>Restaurants in your pocket</h1>
        </div>
        <div className='Part3Container__Part3content2'>
          <h4>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</h4>
        </div>
        <div className='Part3Container__icons'>
          <img width={150} height={50} src='https://e7.pngegg.com/pngimages/384/968/png-clipart-google-play-app-store-android-mobile-app-android-text-logo.png' alt='play'></img>
          <img width={150} height={50} src='https://w7.pngwing.com/pngs/34/523/png-transparent-app-store-apple-logo-apple-text-logo-video-game.png'></img>

        </div>


        <div className='Part3div'>
          <img width={400} height={500} src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n' />

          <img width={400} height={500} src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn' />
        </div>
      </div>
    </>
  )
}

export default Part3
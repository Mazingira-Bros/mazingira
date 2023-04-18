import React from 'react'

import image from '../utilities/images/image.jpg'
import icon from '../utilities/icons/title-icon.png'

function LandingPage() {
  return (
    <div className='flexxie'>
    < div className='container'>
      <div className='item-1'>
        <img src={image} >

        </img>
      </div>
      <div className='item-2'>
        {/* <img src={icom}></img> */}
        <br></br>
        <p>  We Have The Power Today To Change Tomorrow!  </p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
  Get Started
</button>
      </div>
    </div>
 </div>

  )
}


export default LandingPage
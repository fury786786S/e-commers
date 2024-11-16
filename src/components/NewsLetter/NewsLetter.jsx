import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className='news'>
        <h1>Get Exclusive Ofeers On Yours Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id' required />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
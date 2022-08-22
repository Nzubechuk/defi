import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="content">
            <h2>Join Our Defi Community</h2>
            <form action="https://getform.io/f/8df1c4f9-5825-422a-a405-6a6b2e5fba47" method='POST'>
                <div className="form-container display-col">
                    <input type="email" name='email' placeholder='Enter your email.' />
                    <button className='btn'>Sign up</button>
                </div>
                <div className='form-container'>
                    <input type="checkbox"/> <p>Yes, I agree to receive email communications from DeFi.</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Subscribe
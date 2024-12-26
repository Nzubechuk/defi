import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Subscribe.css'

const Subscribe = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div className="subscribe-background" id='subscribe'>  {/* Static background */}
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }} // Initial state
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Animate on scroll
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>
    </div>
  )
}

export default Subscribe
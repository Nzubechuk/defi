import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Developer.css'
import Terminal from '../../assets/terminal.png'

const Developer = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div className="developer-background" id='developer'> {/* Static background */}
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }} // Initial state
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Animate on scroll
        transition={{ duration: 0.5 }}
      >
        <div className='developers'>
          <div className="container">
              <div className="left">
                  <h2>Superpowers for DEFI developers.</h2>
                  <p>Checkout the <span className="blue">documentation</span>, the <span className="blue">quick start</span> or a guide below to integrate your project with thousands of tokens and billions in liquidity.</p>
              </div>
              <div className="right">
                  <div className="img-container">
                      <img src={Terminal} alt="" />
                  </div>
              </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Developer
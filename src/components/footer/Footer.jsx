import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Footer.css'

const Footer = () => {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <div className="footer-background"> {/* Static background */}
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }} // Initial state
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Animate on scroll
        transition={{ duration: 0.5 }}
      >
        <div className='footer'>
          <div className="container">
              <div className="col">
                  <h4>Products</h4>
                  <p>App</p>
                  <p>Analytics</p>
                  <p>Token Lists</p>
                  <p>Defi</p>
              </div>
              <div className="col">
                  <h4>Developers</h4>
                  <p>Documentation</p>
                  <p>Github</p>
                  <p>Whitepaper</p>
                  <p>Bug Bounty</p>
              </div>
              <div className="col">
                  <h4>Governance</h4>
                  <p>Forum</p>
                  <p>Documentation</p>
                  <p>Policies</p>
                  <p>Terms</p>
              </div>
              <div className="col">
                  <h4>Community</h4>
                  <p>Discord</p>
                  <p>Twitter</p>
                  <p>Reddit</p>
              </div>
              <div className="col">
                  <h4>About</h4>
                  <p>Blog</p>
                  <p>Info</p>
                  <p>FAQ</p>
                  <p>Jobs</p>
              </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Footer
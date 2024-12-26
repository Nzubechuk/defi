import React from 'react'
import MainVideo from '../../assets/video.mp4'
import './Hero.css'
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <motion.div 
      className='hero'
    >
        <video autoPlay loop muted id='video'>
            <source src={MainVideo} type='video/mp4'/>
        </video>
        <motion.div 
          className="hero-text"
          initial={{ y: "100vw", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <h1>Decentralized <span className='blue'>Trading</span> Protocol</h1>
            <p>Guaranteed liquidity trading for millions of users and top Ethereum applications</p>
            <div className="btn-group">
                <motion.button
                  className="btn"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                 <Link to="subscribe" smooth={true} spy={true} offset={-50} duration={500}>Subscribe</Link>
                </motion.button>
                <motion.button 
                  className="btn btn-outline"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  FAQ
                </motion.button>
            </div>
        </motion.div>
        <motion.div 
          className='bottom-text'
          initial={{ x: "100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <h2>Total Value Secured: $42,184,783,662.47</h2>
        </motion.div>
    </motion.div>
  )
}

export default Hero
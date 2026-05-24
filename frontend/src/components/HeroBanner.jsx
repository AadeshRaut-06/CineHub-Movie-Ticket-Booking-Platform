import { motion } from 'framer-motion'

function HeroBanner() {
  return (
    <div className='hero-banner'>
      <div className='hero-overlay'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='hero-content'
        >
          <span className='tag'>New Release</span>

          <h1>Avatar: The Way of Water</h1>

          <p>
            Experience premium cinematic storytelling with immersive visuals.
          </p>

          <div className='hero-buttons'>
            <button className='primary-btn'>Book Ticket</button>
            <button className='secondary-btn'>Watch Trailer</button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroBanner

import { motion } from 'framer-motion'

function MovieCard({ movie }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className='movie-card'
    >
      <img src={movie.image} alt={movie.title} />

      <div className='movie-info'>
        <h3>{movie.title}</h3>

        <p>{movie.genre}</p>

        <div className='movie-meta'>
          <span>{movie.language}</span>
          <span>⭐ {movie.rating}</span>
        </div>

        <button>Book Now</button>
      </div>
    </motion.div>
  )
}

export default MovieCard


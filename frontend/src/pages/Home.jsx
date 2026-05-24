import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import MovieRow from '../components/MovieRow'
import Footer from '../components/Footer'

import { trendingMovies } from '../data/movies'

function Home() {
  return (
    <div className='app'>
      <Navbar />

      <HeroBanner />

      <MovieRow
        title='Trending Movies'
        movies={trendingMovies}
      />

      <MovieRow
        title='Latest Hindi Movies'
        movies={trendingMovies}
      />

      <MovieRow
        title='Latest Marathi Movies'
        movies={trendingMovies}
      />

      <Footer />
    </div>
  )
}

export default Home

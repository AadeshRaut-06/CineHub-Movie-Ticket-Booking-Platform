import Navbar from "../components/Navbar"
import HeroBanner from "../components/HeroBanner"
import MovieCard from "../components/MovieCard"

import movies from "../data/movies"

function Home() {

  const englishMovies =
    movies.filter(movie => movie.language === "English")

  const hindiMovies =
    movies.filter(movie => movie.language === "Hindi")

  const marathiMovies =
    movies.filter(movie => movie.language === "Marathi")

  return (
    <div className="page">

      <Navbar />

      <HeroBanner movie={movies[0]} />

      <div className="section">

        <h2>English Movies</h2>

        <div className="movie-row">
          {
            englishMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          }
        </div>

      </div>

      <div className="section">

        <h2>Hindi Movies</h2>

        <div className="movie-row">
          {
            hindiMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          }
        </div>

      </div>

      <div className="section">

        <h2>Marathi Movies</h2>

        <div className="movie-row">
          {
            marathiMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Home

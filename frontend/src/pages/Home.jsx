import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";

import "../styles/premium.css";

function Home() {

  const movies = [
    "Avatar",
    "Batman",
    "Interstellar",
    "Joker",
    "Avengers",
    "Inception"
  ];

  return (
    <div className="app">

      <Navbar />

      <HeroSection />

      <div className="section">

        <div className="section-header">
          <h2>Now Showing</h2>
          <span>View All</span>
        </div>

        <div className="movie-grid">

          {movies.map((movie, index) => (
            <MovieCard key={index} title={movie} />
          ))}

        </div>

      </div>

      <div className="section">

        <div className="section-header">
          <h2>Coming Soon</h2>
          <span>View All</span>
        </div>

        <div className="movie-grid">

          {movies.map((movie, index) => (
            <MovieCard key={index} title={movie} />
          ))}

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Home;
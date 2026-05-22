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
    "Joker"
  ];

  return (
    <div className="app">

      <Navbar />

      <HeroSection />

      <div className="section">

        <h2 className="heading">
          Trending Movies
        </h2>

        <div className="movie-grid">

          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie}
            />
          ))}

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Home;
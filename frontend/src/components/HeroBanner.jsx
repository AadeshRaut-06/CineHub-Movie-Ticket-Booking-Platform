import { useNavigate } from "react-router-dom"

function HeroBanner({ movie }) {

  const navigate = useNavigate()

  return (
    <div
      className="hero-banner"
      style={{
        backgroundImage: `url(${movie.banner})`
      }}
    >

      <div className="overlay">

        <h1>{movie.title}</h1>

        <p>
          Experience premium cinema booking with CineHub.
          Enjoy immersive visuals and luxury seating.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() => navigate("/bookings")}
          >
            Get Tickets
          </button>

          <button className="secondary-btn">
            Watch Trailer
          </button>

        </div>

      </div>

    </div>
  )
}

export default HeroBanner
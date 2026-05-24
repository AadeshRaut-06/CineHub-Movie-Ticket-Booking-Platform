import { useNavigate } from "react-router-dom"

function HeroBanner() {

  const navigate = useNavigate()

  return (
    <div className="hero-banner">

      <div className="overlay">

        <h1>Avatar : The Way Of Water</h1>

        <p>
          Experience the next generation cinematic universe.
          Book tickets instantly with CineHub.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() => navigate("/bookings")}
          >
            Book Ticket
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
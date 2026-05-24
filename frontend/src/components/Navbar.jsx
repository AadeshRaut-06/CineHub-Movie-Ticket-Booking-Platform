import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">

      <div className="logo">
        STAR Cineplex
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/bookings">Bookings</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

    </div>
  )
}

export default Navbar

import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

function BookingSuccess() {

  return (

    <div className="success-page">

      <Navbar />

      <div className="success-card">

        <div className="checkmark">
          ✓
        </div>

        <h1>Booking Confirmed</h1>

        <p>
          Your tickets have been booked successfully.
        </p>

        <Link to="/">
          <button className="book-btn">
            Back To Home
          </button>
        </Link>

      </div>

    </div>

  )

}

export default BookingSuccess
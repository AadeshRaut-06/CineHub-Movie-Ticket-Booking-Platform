import Navbar from "../components/Navbar"

import { useLocation, Link } from "react-router-dom"

function BookingSuccess() {

  const location = useLocation()

  const booking = location.state

  if(!booking){

    return(

      <div className="page">

        <Navbar />

        <div className="success-card">

          <h1>No Booking Found</h1>

          <Link to="/">
            Go Home
          </Link>

        </div>

      </div>

    )

  }

  return (

    <div className="success-page">

      <Navbar />

      <div className="success-card">

        <div className="checkmark">
          ✓
        </div>

        <h1>
          Booking Confirmed
        </h1>

        <div className="ticket-details">

          <img
            src={booking.poster}
            alt={booking.movie}
            className="success-poster"
          />

          <h2>{booking.movie}</h2>

          <p>
            <strong>Name:</strong>
            {" "}
            {booking.customer}
          </p>

          <p>
            <strong>Theatre:</strong>
            {" "}
            {booking.theater}
          </p>

          <p>
            <strong>Date:</strong>
            {" "}
            {booking.date}
          </p>

          <p>
            <strong>Timing:</strong>
            {" "}
            {booking.timing}
          </p>

          <p>
            <strong>Seats:</strong>
            {" "}
            {booking.seats.join(", ")}
          </p>

        </div>

      </div>

    </div>

  )

}

export default BookingSuccess
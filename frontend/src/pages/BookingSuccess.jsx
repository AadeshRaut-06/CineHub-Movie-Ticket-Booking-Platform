import Navbar from "../components/Navbar"

import { useLocation } from "react-router-dom"

function BookingSuccess() {

  const location = useLocation()

  const booking = location.state

  return (

    <div className="success-page">

      <Navbar />

      <div className="success-card">

        <div className="checkmark">
          ✓
        </div>

        <h1>Booking Confirmed</h1>

        <p>
          Your movie tickets are booked successfully.
        </p>

        <div className="ticket-details">

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

          <p>
            <strong>Total Tickets:</strong>
            {" "}
            {booking.seats.length}
          </p>

          <p>
            <strong>Booking ID:</strong>
            {" "}
            CINEHUB{Math.floor(Math.random()*100000)}
          </p>

        </div>

      </div>

    </div>

  )

}

export default BookingSuccess
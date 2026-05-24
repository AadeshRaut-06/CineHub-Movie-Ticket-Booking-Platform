import Navbar from "../components/Navbar"

function BookingsList() {

  const booking = JSON.parse(

    localStorage.getItem(
      "cinehub-booking"
    )

  )

  if(!booking){

    return(

      <div className="page">

        <Navbar />

        <div
          style={{
            color:"white",
            textAlign:"center",
            marginTop:"120px"
          }}
        >

          <h1>No Bookings Yet</h1>

        </div>

      </div>

    )

  }

  return (

    <div className="page">

      <Navbar />

      <div className="bookings-list">

        <h1>Your Bookings</h1>

        <div className="booking-history-card">

          <img
            src={booking.poster}
            alt={booking.movie}
          />

          <div>

            <h2>{booking.movie}</h2>

            <p>
              Customer:
              {" "}
              {booking.customer}
            </p>

            <p>
              Theatre:
              {" "}
              {booking.theater}
            </p>

            <p>
              Timing:
              {" "}
              {booking.timing}
            </p>

            <p>
              Date:
              {" "}
              {booking.date}
            </p>

            <p>
              Seats:
              {" "}
              {booking.seats.join(", ")}
            </p>

          </div>

        </div>

      </div>

    </div>

  )

}

export default BookingsList
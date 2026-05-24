import { useState } from "react"
import Navbar from "../components/Navbar"
import { useNavigate, useParams } from "react-router-dom"
import movies from "../data/movies"

function Bookings() {

  const navigate = useNavigate()

const { id } = useParams()

const movie =
  movies.find(m => m.id == id)

  const [selectedSeats, setSelectedSeats] = useState([])

  const seats = [
    "A1","A2","A3","A4","A5","A6","A7","A8",
    "B1","B2","B3","B4","B5","B6","B7","B8",
    "C1","C2","C3","C4","C5","C6","C7","C8",
    "D1","D2","D3","D4","D5","D6","D7","D8"
  ]

  const handleSeat = (seat) => {

    if(selectedSeats.includes(seat)) {

      setSelectedSeats(
        selectedSeats.filter(s => s !== seat)
      )

    } else {

      setSelectedSeats([
        ...selectedSeats,
        seat
      ])

    }

  }

 const confirmBooking = () => {

  navigate("/success")

}

  return (

    <div className="page" id="bookings">

      <Navbar />

      <div className="booking-page">

        <h1>Premium Booking</h1>

        <div className="booking-card">

          <img
           src={movie.image}
          />

          <div className="booking-info">

            <h2>{movie.title}</h2>

            <select>
              <option>Select Theatre</option>
              <option>PVR</option>
              <option>INOX</option>
              <option>Cinepolis</option>
            </select>

            <input type="date" />

            <div className="time-slots">

  <button
    onClick={() => alert("11:00 AM Selected")}
  >
    11:00 AM
  </button>

  <button
    onClick={() => alert("03:00 PM Selected")}
  >
    03:00 PM
  </button>

  <button
    onClick={() => alert("06:45 PM Selected")}
  >
    06:45 PM
  </button>

  <button
    onClick={() => alert("10:30 PM Selected")}
  >
    10:30 PM
  </button>

</div>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <select>

              <option>Seat Category</option>

              <option>Silver ₹250</option>

              <option>Gold ₹450</option>

              <option>VIP Recliner ₹900</option>

            </select>

            <div className="seat-layout">

              <h3>Select Your Seats</h3>

              <div className="screen">
                SCREEN THIS WAY
              </div>

              <div className="seats">

                {
                  seats.map(seat => (

                    <button
                      key={seat}
                      className={
                        selectedSeats.includes(seat)
                        ? "selected-seat"
                        : ""
                      }
                      onClick={() => handleSeat(seat)}
                    >
                      {seat}
                    </button>

                  ))
                }

              </div>

            </div>

            <button
              className="book-btn"
              onClick={confirmBooking}
            >
              Confirm Booking
            </button>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Bookings
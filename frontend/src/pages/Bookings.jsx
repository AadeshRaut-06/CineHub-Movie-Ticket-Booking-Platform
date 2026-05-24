import { useState } from "react"
import Navbar from "../components/Navbar"
import { useNavigate, useParams } from "react-router-dom"
import movies from "../data/movies"

function Bookings() {

  const navigate = useNavigate()

  const { id } = useParams()

  const movie =
  movies.find(m => m.id == id) || {

    title: "Select Your Movie",

    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"

  }

  const [selectedSeats, setSelectedSeats] = useState([])

  const [selectedTime, setSelectedTime] = useState("")

  const [selectedTheater, setSelectedTheater] = useState("")

  const [selectedDate, setSelectedDate] = useState("")

  const [customerName, setCustomerName] = useState("")

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

    if(selectedSeats.length === 0){

      alert("Please select seats")

      return
    }

    if(!selectedTime){

      alert("Please select show timing")

      return
    }

    if(!selectedTheater){

      alert("Please select theatre")

      return
    }

    if(!selectedDate){

      alert("Please select date")

      return
    }

    if(!customerName){

      alert("Please enter your name")

      return
    }

    navigate("/success", {

      state: {

        movie: movie.title,

        seats: selectedSeats,

        timing: selectedTime,

        theater: selectedTheater,

        date: selectedDate,

        customer: customerName,

        poster: movie.image

      }

    })

  }

  return (

    <div className="page" id="bookings">

      <Navbar />

      <div className="booking-page">

        <h1>Premium Booking</h1>

        <div className="booking-card">

          <img
            src={movie.image}
            alt={movie.title}
          />

          <div className="booking-info">

            <h2>{movie.title}</h2>

<p className="movie-meta">
  Action • Adventure • IMAX 3D
</p>

<div className="booking-grid">

  <div className="booking-field">

    <label>Select Theatre</label>

    <select
      onChange={(e) =>
        setSelectedTheater(e.target.value)
      }
    >

      <option>PVR Cinemas</option>
      <option>INOX</option>
      <option>Cinepolis</option>
      <option>Miraj Cinemas</option>

    </select>

  </div>

  <div className="booking-field">

    <label>Select Date</label>

    <input
      type="date"
      onChange={(e) =>
        setSelectedDate(e.target.value)
      }
    />

  </div>

</div>

<div className="booking-field">

  <label>Your Name</label>

  <input
    type="text"
    placeholder="Enter Full Name"
    onChange={(e) =>
      setCustomerName(e.target.value)
    }
  />

</div>

<div className="booking-field">

  <label>Show Timings</label>

  <div className="time-slots">

    {
      [
        "09:00 AM",
        "12:30 PM",
        "03:45 PM",
        "06:30 PM",
        "10:15 PM"
      ].map(time => (

        <button
          key={time}
          className={
            selectedTime === time
            ? "active-time"
            : ""
          }

          onClick={() =>
            setSelectedTime(time)
          }
        >
          {time}
        </button>

      ))
    }

  </div>

</div>

<div className="booking-field">

  <label>Seat Category</label>

  <select>

    <option>Silver ₹250</option>

    <option>Gold ₹450</option>

    <option>Platinum ₹700</option>

    <option>VIP Recliner ₹1200</option>

  </select>

</div>

<div className="seat-layout">

  <h3>Select Seats</h3>

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

          onClick={() =>
            handleSeat(seat)
          }
        >
          {seat}
        </button>

      ))
    }

  </div>

</div>

<div className="booking-summary">

  <h3>Booking Summary</h3>

  <p>
    Seats:
    {" "}
    {selectedSeats.join(", ")}
  </p>

  <p>
    Timing:
    {" "}
    {selectedTime}
  </p>

  <p>
    Theatre:
    {" "}
    {selectedTheater}
  </p>

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
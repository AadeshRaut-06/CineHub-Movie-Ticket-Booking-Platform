import Navbar from "../components/Navbar"

function Bookings() {

  return (
    <div className="page">

      <Navbar />

      <div className="booking-page">

        <h1>Showtime</h1>

        <div className="booking-card">

          <img
            src="https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
            alt="avatar"
          />

          <div className="booking-info">

            <h2>Avatar : The Way Of Water</h2>

            <p>3h 12m | PG-13</p>

            <select>
              <option>Select Theatre</option>
              <option>PVR</option>
              <option>INOX</option>
              <option>Cinepolis</option>
            </select>

            <input type="date" />

            <div className="time-slots">
              <button>11:30 AM</button>
              <button>03:00 PM</button>
              <button>06:45 PM</button>
            </div>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <select>
              <option>Select Seat Type</option>
              <option>Silver</option>
              <option>Gold</option>
              <option>VIP Recliner</option>
            </select>

            <div className="seat-layout">

              <h3>Select Seats</h3>

              <div className="seats">

                <button>A1</button>
                <button>A2</button>
                <button>A3</button>
                <button>A4</button>

                <button>B1</button>
                <button>B2</button>
                <button>B3</button>
                <button>B4</button>

              </div>

            </div>

            <button className="book-btn">
              Confirm Booking
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Bookings

import Navbar from "../components/Navbar"

function Bookings() {

  return (
    <div className="page">

      <Navbar />

      <div className="booking-page">

        <h1>Book Movie Tickets</h1>

        <div className="booking-container">

          <div className="booking-left">

            <img
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
              alt="movie"
            />

          </div>

          <div className="booking-right">

            <form className="booking-form">

              <input type="text" placeholder="Full Name" />

              <input type="email" placeholder="Email Address" />

              <input type="tel" placeholder="Phone Number" />

              <select>
                <option>Select Movie</option>
                <option>Pushpa 2</option>
                <option>Chhava</option>
                <option>Sairat</option>
                <option>Avengers Endgame</option>
              </select>

              <select>
                <option>Select Theater</option>
                <option>PVR Cinemas</option>
                <option>INOX</option>
                <option>Cinepolis</option>
              </select>

              <input type="date" />

              <select>
                <option>Select Show Time</option>
                <option>10:00 AM</option>
                <option>1:00 PM</option>
                <option>4:00 PM</option>
                <option>7:00 PM</option>
                <option>10:00 PM</option>
              </select>

              <select>
                <option>Select Seat Type</option>
                <option>Silver</option>
                <option>Gold</option>
                <option>Platinum</option>
                <option>VIP Recliner</option>
              </select>

              <input
                type="number"
                placeholder="Number Of Tickets"
              />

              <div className="seat-layout">

                <h3>Select Seats</h3>

                <div className="seats">

                  <button type="button">A1</button>
                  <button type="button">A2</button>
                  <button type="button">A3</button>
                  <button type="button">A4</button>
                  <button type="button">A5</button>

                  <button type="button">B1</button>
                  <button type="button">B2</button>
                  <button type="button">B3</button>
                  <button type="button">B4</button>
                  <button type="button">B5</button>

                </div>

              </div>

              <button className="book-btn">
                Confirm Booking
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Bookings

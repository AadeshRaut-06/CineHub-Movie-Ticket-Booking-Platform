import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Movies from "../pages/Movies"
import Bookings from "../pages/Bookings"
import Dashboard from "../pages/Dashboard"
import Success from "../pages/BookingSuccess"
import NotFound from "../pages/NotFound"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route
  path="/bookings"
  element={<Bookings />}
/>

<Route
  path="/bookings/:id"
  element={<Bookings />}
/>

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/success" element={<BookingSuccess />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
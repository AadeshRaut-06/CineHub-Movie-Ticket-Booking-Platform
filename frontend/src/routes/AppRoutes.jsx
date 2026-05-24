import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Movies from "../pages/Movies"
import Bookings from "../pages/Bookings"
import Dashboard from "../pages/Dashboard"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

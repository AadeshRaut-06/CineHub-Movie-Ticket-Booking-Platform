import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Booking from '../pages/Bookings'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

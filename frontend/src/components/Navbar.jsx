import { Link } from 'react-router-dom'
import { FiSearch, FiBell } from 'react-icons/fi'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-left'>
        <h1 className='logo'>🎬 CineHub</h1>

        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/movies'>Movies</Link>
          <Link to='/booking'>Bookings</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </div>
      </div>

      <div className='nav-right'>
        <FiSearch className='nav-icon' />
        <FiBell className='nav-icon' />

        <img
          className='avatar'
          src='https://i.pravatar.cc/100'
          alt='avatar'
        />
      </div>
    </nav>
  )
}

export default Navbar

import { Link } from 'react-router-dom'

// styles & images
import './Navbar.css'
//import Temple from '../assets/temple.svg'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          {/* <img src={Temple} alt="dojo logo" /> */}
          <span>Add --&#62; (Icon) --- </span>
          <span>End of Journey</span>
        </li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/setup">Setup</Link></li>
        <li><Link to="/process">PlaceHolder</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </nav>
  )
}

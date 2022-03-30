import { NavLink } from "react-router-dom"

// styles & images
import "./SidebarSetup.css"
// import DashboardIcon from '../assets/dashboard_icon.svg'
// import AddIcon from '../assets/add_icon.svg'

export default function SidebarSetup() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          
          {/* avatar & username here later */}
          <p>User Name</p>  
        </div>
        <div className="heading">
          <span>Setup</span>
          </div>  
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/contacts">
                {/* <img src={DashboardIcon} alt="pools icon" /> */}
                <span>Contacts</span>
              </NavLink>
              <ul>
                <li> Add Contact</li>
                <li> List Contact</li>
              </ul>
            </li>
            <li>
              <NavLink to="/create">
                {/* <img src={AddIcon} alt="add project icon" /> */}
                <span>Messages</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

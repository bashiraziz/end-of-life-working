import { NavLink } from "react-router-dom"

// styles & images
import "./SidebarSetup.css"
// import DashboardIcon from '../assets/dashboard_icon.svg'
// import AddIcon from '../assets/add_icon.svg'

export default function Sidebar2() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          
          {/* avatar & username here later */}
          <p>User Name</p>  
        </div>
        <div className="heading">
          <span></span>
          </div>  
        <nav className="links">
          <ul>
            <li>
                
                {/* <span>Contacts</span> */}
                <NavLink exact to="/contacts">
                <li>Contacts</li>
              </NavLink>
              <NavLink exact to="/contacts">
                <li>Financial Institutes</li>
              </NavLink>              
              <NavLink exact to="/contacts">
                <li>Digital Accounts</li>
              </NavLink>
              <NavLink exact to="/contacts">
                <li>Messages</li>
              </NavLink>                               
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

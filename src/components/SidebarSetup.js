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
          <span></span>
          </div>  
        <nav className="links">
        
                
              
              <ul>
              <NavLink exact to="/contactType">
                <li>Contact types</li>
              </NavLink>
              </ul>
            
             
              <ul>
                <NavLink exact to="/messageType">
                <li>Message types</li>
                </NavLink>
              </ul>
        </nav>
      </div>
    </div>
  )
}

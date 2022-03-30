import { NavLink } from "react-router-dom"

// styles & images
import "./SidebarGeneric.css"
// import DashboardIcon from '../assets/dashboard_icon.svg'
// import AddIcon from '../assets/add_icon.svg'

export default function SidebarGeneric() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          
          {/* avatar & username here later */}
          <p>User Name</p>  
        </div>
        <div className="heading">
          <span>Heading(change to appropriate heading</span>
          </div>  
        <nav className="links">
          <ul>
            <li>
              {/* <NavLink exact to="/pools">
                <img src={DashboardIcon} alt="pools icon" />
                <span>Pools Setup</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span>New Project</span>
              </NavLink> */}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

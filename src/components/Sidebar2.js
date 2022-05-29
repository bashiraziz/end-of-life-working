import { NavLink } from "react-router-dom"

// styles & images
import "./Sidebar2.css"
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
                <NavLink exact to="/contacts">
                <li>Contacts</li>
              </NavLink>
              <NavLink exact to="/financial">
                <li>Financial</li>
                </NavLink>  
                  <nav className="linksChild">
                    <ul>
                      <NavLink exact to ="/banking">
                        <li>Banking</li>
                      </NavLink>
                      <NavLink exact to ="/investments">
                        <li>Investments</li>
                      </NavLink>
                      <NavLink exact to ="/insurance">
                        <li>Insurance</li>
                      </NavLink>
                      <NavLink exact to ="/other-assets">
                        <li>Other Assets</li>
                      </NavLink>
                      <NavLink exact to ="/debts-owed-to-us">
                        <li>Debts Owed to Us</li>
                      </NavLink>
                      <NavLink exact to ="/credit-cards">
                        <li>Credit Cards</li>
                      </NavLink>
                      <NavLink exact to ="/debts-we-owe">
                        <li>Debts we Owe</li>
                      </NavLink>
                    </ul>
                  </nav>
                          
              <NavLink exact to="/digitalAccounts">
                <li>Digital Accounts</li>
              </NavLink>
              <NavLink exact to="/messages">
                <li>Standard Messages</li>
              </NavLink>                               
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

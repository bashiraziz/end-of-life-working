//import Sidebar from '../../components/SidebarSetup'

// styles
import SidebarSetup from '../../components/SidebarSetup'
import './Contacts.css'
import AddIcon from '../../assets/add_icon.svg'
import ContactForm from '../../components/ContactForm'
export default function Contacts() {
  return (
 
    <>
    <div className="flex">
      <div className="flex-child-side">
        <SidebarSetup />
      </div>
      <div className="flex-child">
          <h3 id="contactPage">Contacts Page</h3>
          <br></br>
          <br></br>
          <img src={AddIcon} alt="add project icon" />
          <span>A New Contact</span>
          <ContactForm />
      </div>
    </div>  
  </>
  )
}

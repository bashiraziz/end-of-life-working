//import Sidebar from '../../components/SidebarSetup'
import { useNavigate } from 'react-router-dom';
// styles
import SidebarSetup from '../../components/SidebarSetup'
import './Contacts.css'
import AddIcon from '../../assets/add_icon.svg'
//import ContactForm from '../../components/ContactForm'
export default function Contacts() {

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/contactForm')
    
  }  
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
          <form onSubmit={handleSubmit}>
            <button type="submit"> Submit</button>
          </form>
      </div>
    </div>  
  </>
  )
}

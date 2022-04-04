//import Sidebar from '../../components/SidebarSetup'
import { useNavigate } from 'react-router-dom';
// styles
//import SidebarSetup from '../../components/SidebarSetup'
import './Contacts.css'
import Button from '@mui/material/Button';
import Sidebar2 from '../../components/Sidebar2'

//import AddIcon from '../../assets/add_icon.svg'
//import ContactForm from '../../components/ContactForm'
export default function Contacts() {

  const navigate = useNavigate();
  const handleClickAdd = () => {
    navigate('/contactForm')
    
  }
  
  const handleClickList = () => {
    navigate('/listContacts') //**Add list page navigation here
    alert('handleClickList clicked')    
  }

  return (
 
    <>
    <div className="flex">
      <div className="flex-child-side">
        <Sidebar2 />
      </div>
      <div className="flex-child">
          <h3 id="contactPage">Contacts Page</h3>
          <br></br>
          <br></br>
          {/* <img src={AddIcon} alt="add project icon" /> */}
          {/* <span>A New Contact</span>
          <form onSubmit={handleSubmit}>
            <button type="submit" > Add a New Contact</button>
          </form> */}
          <Button variant="outlined" size="medium"  onClick={handleClickAdd} class="button button1">Add a Contact</Button>
          <button onClick={handleClickList}class="button button2">List Contacts</button>
      </div>
    </div>  
  </>
  )
}

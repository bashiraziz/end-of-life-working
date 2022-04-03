//import Sidebar from '../../components/SidebarSetup'

// styles
import React from 'react';
import ReactDOM from 'react-dom'
import SidebarSetup from '../../components/SidebarSetup'
import './Contacts.css'
//import AddIcon from '../../assets/add_icon.svg'
import ContactForm from '../../components/ContactForm'
export default function Contacts() {
  
  function addContactForm() {
    //Add ContactForm here
    ReactDOM.render(
      <React.StrictMode>
        <ContactForm />
      </React.StrictMode>,
      document.getElementById('root')
    );
    alert(" addContactForm button clicked")
    
  }
  
  return (
 
    <>
    <div className="flex">
      <div className="flex-child-side">
        <SidebarSetup />
      </div>
      <div className="flex-child"></div>
      <div className="flex-child">
          {/* <h3 id="contactPage">Contacts Page</h3> */}
          {/* <img src={AddIcon} alt="add project icon" /> */}
          <p><strong>Add a New Contact</strong></p> 
          {/* <ContactForm />  */}
          
      <input  type="button" value="Add Contact"
              onClick={addContactForm}  
      >

        </input> 
      </div>
      
    </div>  
  </>
  )
}

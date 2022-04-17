import './ContactForm.css'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Sidebar2 from '../../components/Sidebar2';

export default function ContactForm() {
  
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const submit = (event) => {
    event.preventDefault();
    alert(inputs);

    
  }
  const navigate = useNavigate();
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
    <form id="contactForm" onSubmit={submit}>
      <label>First Name
      <input 
        type="text" 
        name="contactFirstName" 
        value={inputs.contactFirstName || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>

      <label>Last Name
      <input 
        type="text" 
        name="contactLastName" 
        value={inputs.contactLastName || ""} 
        onChange={handleChange}
      />
      <br></br>

      </label>
      <label>Mobile Phone Number
        <input 
          type="number" 
          name="contactMobilePhoneNumber" 
          value={inputs.contactMobilePhoneNumber || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>

        <label>Email
      <input 
        type="text" 
        name="contactEmail" 
        value={inputs.contactEmail || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>

      <label>Contact Type
      <input 
        type="text" 
        name="contactType" 
        value={inputs.contactType || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>

      <label>Message Type
      <input 
        type="text" 
        name="contactMessageType" 
        value={inputs.contactMessageType || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <br></br>
        <input type="submit"/>
    </form>
    </div>
    <div className="flex-child">
          
          <button onClick={handleClickList}class="button button2">List Contacts</button>
      </div>
    </div>
    </>
  )
}
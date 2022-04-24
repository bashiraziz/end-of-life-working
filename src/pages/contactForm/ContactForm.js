import './ContactForm.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Sidebar2 from '../../components/Sidebar2';
import db from '../../firebase'
import { contactTypesSelect } from '../../components/ContractTypesSelect';
import { messageTypesSelect } from '../../components/MessageTypesSelect';

export default function ContactForm() {
  
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    //alert(" Inside ofhandleChange")
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    //alert(inputs.messageType);
  }

  
  const submit = (e) => {
    alert("inside of submit");
    e.preventDefault();
    db.collection("contacts").add({
    firstName: inputs.contactFirstName,
    lastName: inputs.contactLastName,
    middleInitial: inputs.contactMiddleInitial,
    email: inputs.contactEmail,
    mobilePhoneNumber: inputs.contactMobilePhoneNumber,
    contactType: inputs.contactType,
    messageType: inputs.messageType,
    messageType2: inputs.messageType2
    });
    //alert(inputs.name);
    //setInputs({});
  };
///**** is this logic needed? Can there be a better option. It clears the form after submit */
  useEffect(() => {
    db.collection("contacts").onSnapshot((snapshot) => {
    setInputs(
      snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      }))
    );
    });
  }, []);
  ///==================================================
  
    const navigate = useNavigate();
    const handleClickList = () => {
      navigate('/listContacts') 
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
      
      
      <label>Middle Initial
      <input 
        type="text" 
        name="contactMiddleInitial" 
        value={inputs.contactMiddleInitial || ""} 
        onChange={handleChange}
      />
      <br></br>

      </label>
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
          type="tel" 
          name="contactMobilePhoneNumber" 
          value={inputs.contactMobilePhoneNumber || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>

        <label>Email
      <input 
        type="email" 
        name="contactEmail" 
        value={inputs.contactEmail || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
  
      <label>Contact Type
      <select name="contactType" onChange={handleChange}>
            {contactTypesSelect.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
      
      </label> 
      <br></br>

      <label>Message Type
        <select name="messageType" onChange={handleChange}>
            {messageTypesSelect.map((option) => (
              <option value={option.value || ""}>{option.label} </option>
            ))}
        </select>
      </label>
      <br></br>
      <br></br>
      <label>Custom Message
      <input 
        type="select" 
        name="messageType2" 
        value={inputs.messageType2 || ""} 
        onChange={handleChange}
      />
      </label>
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
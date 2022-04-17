import './ContactForm.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Sidebar2 from '../../components/Sidebar2';
import db from '../../firebase'
import { options } from '../../components/ContractTypesSelect';
export default function ContactForm() {
  
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    //alert(" Inside ofhandleChange")
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    //alert(inputs.contactFirstName);
  }

  
  const submit = (e) => {
    alert("inside of submit");
    e.preventDefault();
    db.collection("end-of-journey").add({
    firstName: inputs.contactFirstName,
    lastName: inputs.contactLastName,
    middleInitial: inputs.contactMiddleInitial,
    email: inputs.contactEmail,
    mobilePhoneNumber: inputs.contactMobilePhoneNumber,
    contactType: inputs.contactType,
    messageType: inputs.contactMessageType,
    });
    //alert(inputs.name);
    //setInputs({});
  };

  useEffect(() => {
    db.collection("end-of-journey").onSnapshot((snapshot) => {
    setInputs(
      snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
      }))
    );
    });
  }, []);
  
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
      <select value="banana">
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
      
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
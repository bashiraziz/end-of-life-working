import './ContactForm.css'

import { useState } from "react";

export default function ContactForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    //event.preventDefault();
    //alert(inputs);
  }

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <label>First Name
      <input 
        type="text" 
        name="contactName" 
        value={inputs.contactName || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>

      <label>Last Name
      <input 
        type="text" 
        name="contactName" 
        value={inputs.contactName || ""} 
        onChange={handleChange}
      />
      <br></br>

      </label>
      <label>Mobile Phone Number
        <input 
          type="number" 
          name="phone" 
          value={inputs.phone || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>

        <label>Email
      <input 
        type="text" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <br></br>
        <input type="submit"/>
    </form>
  )
}
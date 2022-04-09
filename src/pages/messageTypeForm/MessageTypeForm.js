import './MessageTypeForm.css'

import { useState } from "react";
import SidebarSetup from '../../components/SidebarSetup';
import { useNavigate } from 'react-router-dom';
//import styles
import Button from '@mui/material/Button';
//import Grid from "@material-ui/core/Grid";
//import { Divider } from '@mui/material';

export default function MessageTypeForm() {
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

  const navigate = useNavigate();
 const handleClickList = () => {
  navigate('/listMessageTypes') //**Add list page navigation here
  alert('handleClickList clicked on message type form page')    
}

  return (
   <>
    <div className="flex">
    <div className="flex-child-side">
        <SidebarSetup />
      </div>
      
    <div className="flex-child">
    <form id="contactTypeForm" onSubmit={handleSubmit}>
      <label>Message Type
      <input 
        type="text" 
        name="contactName" 
        value={inputs.contactName || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>

      <label>Message
      <input 
        type="text" 
        name="contactName" 
        value={inputs.contactName || ""} 
        onChange={handleChange}
      />
      <br></br>

      </label>
      <label>Additional Field One
        <input 
          type="number" 
          name="phone" 
          value={inputs.phone || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>

        <label>Additional Field Two
      <input 
        type="text" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>

      <label>Additional Field Three
      <input 
        type="text" 
        name="email" 
        value={inputs.contactType || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>

      <label>Additional Field Four
      <input 
        type="text" 
        name="email" 
        value={inputs.messageType || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <br></br>
        <input type="submit"/>
    </form>
    
    </div>
    <div container justify="flex-end">
        <Button variant="outlined" size="medium"  onClick={handleClickList} class="button button1">List Message Types</Button>
      </div>
    </div>
    </>
  )
}
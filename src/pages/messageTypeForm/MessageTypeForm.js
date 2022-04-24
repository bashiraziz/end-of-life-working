import './MessageTypeForm.css'

import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import db from '../../firebase';
//import styles
import Button from '@mui/material/Button';
import './MessageTypeForm.css'
//import SidebarSetup from '../../components/SidebarSetup';
import Sidebar2 from '../../components/Sidebar2';

export default function MessageForm() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    //alert(" Inside ofhandleChange")
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    //alert(inputs.messageType);
  }

  const navigate = useNavigate();
  const handleMessageTypeList = ()=>{

    navigate('/listStandardMessages') //**Add list page navigation here
      
  }



  
  const submit = (e) => {
    alert("inside of submit");
    e.preventDefault();
    db.collection("standardMessages").add({
    messageType: inputs.messageType,
    message: inputs.message,
    additional1: inputs.additional1,
    additional2: inputs.additional2,
    additional3: inputs.additional3,
    additional4: inputs.additional4,
    });
    //alert(inputs.name);
  };
///**** is this logic needed? Can there be a better option. It clears the form after submit */
  useEffect(() => {
    db.collection("standardMessages").onSnapshot((snapshot) => {
    setInputs(
      snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      }))
    );
    });
  }, []);

  return (
   <>
    <div className="flex">
    <div className="flex-child-side">
        <Sidebar2 />
      </div>
      
    <div className="flex-child">
    <form id="" onSubmit={submit}>
      <label>Message Type
      <input 
        type="text" 
        name="messageType" 
        value={inputs.messageType || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>

      <label>Message
      <input 
        type="text" 
        name="message" 
        value={inputs.message || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>

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
        <Button variant="outlined" size="medium"  onClick={handleMessageTypeList} class="button button1">List Message Types</Button>
      </div>
    </div>
    </>
  )
}
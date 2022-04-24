
//the contact type and the message type fields do not refresh after submit
//need to look into it
import './MessageForm.css'
import { useState } from "react";
import Sidebar2 from '../../components/Sidebar2';
import { useNavigate } from 'react-router-dom';
import db from '../../firebase';
//import styles
import Button from '@mui/material/Button';
//import Grid from "@material-ui/core/Grid";
//import { Divider } from '@mui/material';

export default function MessageForm() {

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
    db.collection("standardMessages").add({
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
    db.collection("standardMessages").onSnapshot((snapshot) => {
    setInputs(
      snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
      }))
    );
    });
  }, []);

  return (
   <>
    <div className="flex">
    <div className="flex-child-side">
        <SidebarSetup />
      </div>
      
    <div className="flex-child">
    <form id="" onSubmit={handleSubmit}>
      <label>Contact Type
      <input 
        type="text" 
        name="contactName" 
        value={inputs.contactName || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>

      <label>Contact Type
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
        <Button variant="outlined" size="medium"  onClick={handleClickList} class="button button1">List Contact Types</Button>
      </div>
    </div>
    </>
  )
}
import '../contactForm/ContactForm.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Sidebar2 from '../../components/Sidebar2';
import db from '../../firebase'

export default function BankForm() {
  
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
    db.collection("banks").add({
    bankName: inputs.bankName,
    accountNumber: inputs.accountNumber,
    routingNumber: inputs.routingNumber,
    email: inputs.bankEmail,
    phoneNumber: inputs.bankPhoneNumber,
    URL: inputs.bankURL,
    });
    //alert(inputs.name);
    //setInputs({});
  };
///**** is this logic needed? Can there be a better option. It clears the form after submit */
  useEffect(() => {
    db.collection("banks").onSnapshot((snapshot) => {
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
      navigate('/listBanks') 
      alert('handleClickList clicked')    
    }

  return (
   <>
    <div className="flex">
    <div className="flex-child-side">
        <Sidebar2 />
      </div>
    <div className="flex-child">
    <form id="bankForm" onSubmit={submit}>
      <label>Bank Name
      <input 
        type="text" 
        name="bankName" 
        value={inputs.bankName || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      
      <label>Account Number
      <input 
        type="text" 
        name="accountNumber" 
        value={inputs.accountNumber || ""} 
        onChange={handleChange}
      />
      <br></br>

      </label>
      <label>Routing Number
      <input 
        type="text" 
        name="routingNumber" 
        value={inputs.routingNumber || ""} 
        onChange={handleChange}
      />
      <br></br>

      </label>
      <label>Phone Number
        <input 
          type="tel" 
          name="bankPhoneNumber" 
          value={inputs.bankPhoneNumber || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>

        <label>Email
      <input 
        type="email" 
        name="bankEmail" 
        value={inputs.bankEmail || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
  
      <label>Bank URL
      <input 
        type="url" 
        name="bankURL" 
        value={inputs.bankURL || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>

      <input type="submit"/>
    </form>
    </div>
    <div className="flex-child">
          
          <button onClick={handleClickList}class="button button2">List Banks</button>
      </div>
    </div>
    </>
  )
}
import SidebarSetup from '../../components/SidebarSetup';
import { useNavigate } from 'react-router-dom';

// styles
import Button from '@mui/material/Button';
import './MessageType.css'

export default function MessageType()  {
 const navigate = useNavigate();
 const handleClickAdd = () => {
   navigate('/messageTypeForm')
   
 }
 
 const handleClickList = () => {
   navigate('/listMessageTypes') //**Add list page navigation here
   alert('handleClickList clicked')    
 }

 return (

   <>
   <div className="flex">
     <div className="flex-child-side">
       <SidebarSetup />
     </div>
     <div className="flex-child">
         <h3 id="contactTypePage">Message Types Page</h3>
         <br></br>
         <br></br>
         <Button  variant="outlined" size="medium"  
                  onClick={handleClickAdd} 
                  class="button button1">
                   Add a Message Type</Button>
         {/* <Button  onClick={handleClickList}
                  class="button button2">List Message Types</Button> */}
     </div>
   </div>  
 </>
 )
}

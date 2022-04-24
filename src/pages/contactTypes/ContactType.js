import SidebarSetup from '../../components/SidebarSetup';
import { useNavigate } from 'react-router-dom';

// styles
import Button from '@mui/material/Button';
import './ContactType.css'

export default function ContactType()  {
 const navigate = useNavigate();
 const handleClickAdd = () => {
   navigate('/contactTypeForm')
   
 }
 
//  const handleClickList = () => {
//    navigate('/listContactTypes') //**Add list page navigation here
//    alert('handleClickList clicked')    
//  }

 return (

   <>
   <div className="flex">
     <div className="flex-child-side">
       <SidebarSetup />
     </div>
     <div className="flex-child">
         <h3 id="contactTypePage">Contact Types Page</h3>
         <br></br>
         <br></br>
         <Button  variant="outlined" size="medium"  
                  onClick={handleClickAdd} 
                  class="button button1">
                   Add a Contact Type</Button>
         {/* <Button  onClick={handleClickList}
                  class="button button2">List Contact Types</Button> */}
     </div>
   </div>  
 </>
 )
}

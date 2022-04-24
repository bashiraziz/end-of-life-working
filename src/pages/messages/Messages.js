//import Components

//import styles
import Button  from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Sidebar2 from "../../components/Sidebar2"
import "./Messages.css"

export default function Messages() {

  
  const navigate = useNavigate();
  const handleClickAdd = () => {
    navigate('/messageTypeForm')   
  }
  
  const handleClickList = () => {
    navigate('/listStandardMessages')
    alert('handleClickList clicked')    
  }


 return(
  <>
  <div className="flex">
  <div className="flex-child one">
   <Sidebar2 />
   </div>
  <div className="flex-child two">
    <h2> This is Messages page</h2>
    <Button variant="outlined" size="small"  
      onClick={handleClickAdd} 
      class="button button1">
        Add Standard Message</Button>
    <Button variant="outlined" size="small" 
      onClick={handleClickList}
      class="button button2">
        List Standard Messages</Button>
  </div>
  <div className="flex-child three">

  </div>

  </div>
  </>
 )
}
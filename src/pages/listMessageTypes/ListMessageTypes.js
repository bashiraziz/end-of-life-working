//import components
import SidebarSetup from '../../components/SidebarSetup';
import { useNavigate } from 'react-router-dom';

// imports styles
import './ListMessageTypes.css';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
export default function ListMessageTypes () {
 
 const navigate = useNavigate();
 const handleClickList = () => {
  navigate('/messageTypeForm') //**Add list page navigation here
  alert('handleClickList clicked')    
}

 return(
  <>
   {/* add logic to list all the coantacts from the database */}


   <div className="flex">
    <div className="flex-child">
    <SidebarSetup />
    </div>
   <div className="flex-child">
 
    <Grid container justify="flex-end">
    <Button variant="outlined" size="medium"  onClick={handleClickList} class="button button1">Add a Message Type</Button>
    </Grid>

    <h2> List of Message Types </h2>
    
   </div>
   </div>
  </>

 )
}
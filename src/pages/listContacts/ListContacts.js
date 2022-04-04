//import components
import Sidebar2 from '../../components/Sidebar2'
import { useNavigate } from 'react-router-dom';

// imports styles
import './ListContacts.css';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
export default function ListContacts () {
 
 const navigate = useNavigate();
 const handleClickList = () => {
  navigate('/contactForm') //**Add list page navigation here
  alert('handleClickList clicked')    
}

 return(
  <>
   {/* add logic to list al the coantacts from the database */}


   <div className="flex">
    <div className="flex-child">
    <Sidebar2 />
    </div>
   <div className="flex-child">
 
    <Grid container justify="flex-end">
    <Button variant="outlined" size="medium"  onClick={handleClickList} class="button button1">Add a Contact</Button>
    </Grid>

    <h2> List of Contacts </h2>
    
   </div>
   </div>
  </>

 )
}
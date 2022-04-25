//import components
import Sidebar2 from '../../components/Sidebar2'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import db from "../../../src/firebase";

// imports styles
import './ListContacts.css';
//import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";


  function ListContacts () {

  const [contactList, setContactList] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    db.collection("contacts").onSnapshot((snapshot) => {
     setContactList(
      snapshot.docs.map((doc) => ({
      id: doc.id,
      delete: 'Delete',
      edit: 'Edit',
      ...doc.data(),
      }))
     );
     });
     setLoading(false);
     
    }, []);
  
    //console.log(contactList)
    
    //How do we make this dynamic do that a column would be added when a field is added to the database?
  const columns =   [
    { field: 'delete', headerName:'Delete' },
    { field: 'edit', headerName:'Edit' },
    { field: 'lastName', editable: true, headerName: 'Last Name', width: 200 },
    { field: 'firstName', headerName: 'FirstName', width: 200 },
    { field: 'middleInitial', headerName: 'MI', width: 50 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'mobilePhoneNumber', headerName: 'Phone Number - Mobile', width: 200 },
    { field: 'contactType', headerName: 'Contact Type', width: 110 },
    { field: 'messageType', headerName: 'Message Type', width: 120 },
    
  ]
  

  const navigate = useNavigate();
  const handleClickAddContact = () => {
    navigate('/contactForm') //**Add list page navigation here
   
  }

  if(loading) {
    return <h1> The data is loading</h1>
   }
  
    return (
    <>
    
    <div className="flex">
      <div className="flex-child-side">
        <Sidebar2 />
      </div>
        
      <div className="flex-child-side">
        <DataGrid
          rows={contactList}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
          editMode="row" 
          initialState={{
            sorting: {
              sortModel: [{ field: 'lastName', sort: 'asc' }],
            },
          }}
          rowsPerPageOptions={[5, 10, 25, 50 , 100]}
          components={{ Toolbar: GridToolbar }}
          //pageSize={12}
        />
      </div>
      <div className="flex-child">
          
          <Button onClick={handleClickAddContact}class="button button2">Add Contact</Button>
      </div>
      
    </div>
    
    </>  
    )
  }
  
  
  
  export default ListContacts;
  

 
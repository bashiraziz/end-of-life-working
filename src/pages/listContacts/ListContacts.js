//import components
import Sidebar2 from '../../components/Sidebar2'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import db from "../../../src/firebase";
// imports styles
import './ListContacts.css';
//import Grid from "@material-ui/core/Grid";
//import Button from "@material-ui/core/Button";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";


  function ListContacts () {
    
  const [contactList, setContactList] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    db.collection("end-of-journey").onSnapshot((snapshot) => {
     setContactList(
      snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      }))
     );
     });
     setLoading(false);
     
    }, []);
  
    //console.log(contactList)
    
    //How do we make this dynamic do that a column would be added when a field is added to the database?
  const columns =   [
    { field: 'lastName', headerName: 'Last Name', width: 200 },
    { field: 'firstName', headerName: 'FirstName', width: 200 },
    { field: 'middleInitial', headerName: 'MI', width: 50 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'mobilePhoneNumber', headerName: 'Phone Number - Mobile', width: 200 },
    { field: 'contactType', headerName: 'Contact Type', width: 110 },
    { field: 'messageType', headerName: 'Message Type', width: 120 },
    
  ]

  if(loading) {
    return <h1> The data is loading</h1>
   }
  
    return (
      
    <div className="App__DataDisplay">
      
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={contactList}
        columns={columns}
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
    
      
    </div>  
    )
  }
  
  
  
  export default ListContacts;
  

 
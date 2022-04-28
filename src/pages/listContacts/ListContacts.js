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
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { DataGrid, GridToolbar, GridActionsCellItem, GridCloseIcon } from "@mui/x-data-grid";
import AddIcon from '@mui/icons-material/Add';
import { createTheme } from '@mui/system';
import {purple} from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/core';

  export default function ListContacts () {

  const [contactList, setContactList] = useState([]);
  const [loading, setLoading] = useState([]);
  const [notEditable, setNotEditable] = useState('null');
  //alert(notEditable)  

  const theme = createTheme({
    palette: {
      warning: purple[900],
      
    },
  });
  
  
  useEffect(() => {
    db.collection("contacts").onSnapshot((snapshot) => {
     setContactList(
      snapshot.docs.map((doc) => ({
      id: doc.id,
      // delete: 'Delete',
      // edit: 'Edit',
      ...doc.data(),
      }))
     );
     });
     setLoading(false);
     
    }, []);
  
    //console.log(contactList)
    
    //How do we make this dynamic do that a column would be added when a field is added to the database?
    
    const [selectedEdit, setSelectedEdit] = useState('primary')
    const [selectedSave, setSelectedSave ]= useState('disabled')
    const [cancel, setCancel] = useState('disabled')
    const [selectDelete, setSelectDelete] = useState('warning')
    
    const columns =   [
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Action',
      width: 150,
      
      getActions: () => [
       
        <ThemeProvider theme={theme}>
        <GridActionsCellItem   icon={<DeleteIcon  color={selectDelete} /> }  />
        </ThemeProvider> ,
        <GridActionsCellItem icon={<SaveIcon color={selectedSave} />}
          onClick={()=> { setNotEditable('null'); 
                          setSelectedEdit('primary');
                          setSelectedSave('disabled');
                          setCancel('disabled');
                          setSelectDelete('warning');
                        } } />,
        <GridActionsCellItem icon={<GridCloseIcon  color={cancel}/> }
          onClick={()=> { setSelectedEdit('primary');
                          setCancel('disable');
                          setSelectedSave('disabled');
                          setSelectDelete('warning');
                        }
                      }  />,
        <GridActionsCellItem icon={<EditIcon color={selectedEdit} />}
          onClick={()=> { setNotEditable('row'); 
                          setSelectedEdit('disabled');
                          setSelectedSave('primary');
                          setCancel('warning');
                          setSelectDelete('disabled') 
                        }
                      }  />,
      ],
    },
    { field: 'lastName', editable: true, headerName: 'Last Name', width: 150 },
    { field: 'firstName', editable: true, headerName: 'FirstName', width: 150 },
    { field: 'middleInitial', headerName: 'MI', width: 50 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'mobilePhoneNumber', headerName: 'Phone Number - Mobile', width: 175 },
    { field: 'contactType', headerName: 'Contact Type', width: 100 },
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
        
      <div className="flex-child-side" style={{width:'100%'}}>
      
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClickAddContact}>
        Add Contact
      </Button>

        <DataGrid
          rows={contactList}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
          editMode={notEditable} 
          initialState={{
            sorting: {
              sortModel: [{ field: 'lastName', sort: 'asc' }],
            },
          }}
          rowsPerPageOptions={[5, 10, 25, 50 , 100]}
          components={{ Toolbar: GridToolbar }}
          pageSize={12}
        />
      </div>
      {/* <div className="flex-child">
          
          <Button onClick={handleClickAddContact}class="button button2">Add Contact</Button>
      </div> */}
      
    </div>
    
    </>  
    )
  }
  
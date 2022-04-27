//import components
import Sidebar2 from '../../components/Sidebar2'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import db from "../../../src/firebase";
import PropTypes from 'prop-types';

// imports styles
import './ListContacts.css';
//import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { DataGrid, GridToolbar, GridActionsCellItem, useGridApiContext, } from "@mui/x-data-grid";
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';

function EditToolbar(props) {
  const apiRef = useGridApiContext();
  const { selectedCellParams, setSelectedCellParams } = props;

  const handleClick = async () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field, cellMode } = selectedCellParams;
    if (cellMode === 'edit') {
      apiRef.current.stopCellEditMode({ id, field });
      setSelectedCellParams({ ...selectedCellParams, cellMode: 'view' });
    } else {
      apiRef.current.startCellEditMode({ id, field });
      setSelectedCellParams({ ...selectedCellParams, cellMode: 'edit' });
    }
  };

  const handleMouseDown = (event) => {
    // Keep the focus in the cell
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        justifyContent: 'center',
        display: 'flex',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Button
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        disabled={!selectedCellParams}
        color="primary"
      >
        {selectedCellParams?.cellMode === 'edit' ? 'Save' : 'Edit'}
      </Button>
    </Box>
  );
}

EditToolbar.propTypes = {
  selectedCellParams: PropTypes.any,
  setSelectedCellParams: PropTypes.func.isRequired,
};




  export default function ListContacts () {

  const [contactList, setContactList] = useState([]);
  const [loading, setLoading] = useState([]);
  const [notEditable, setNotEditable] = useState('null');
  //alert(notEditable)  
  
  const handleChange = () =>{alert('Alert me')}
  const handleChange2 = () =>{alert('Alert me')}
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
    const [selectedEdit, setSelectedEdit] = useState('primary')
    const [selectedSave, setSelectedSave ]= useState('disabled  ')
    const columns =   [
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Action',
      width: 100,
      
      getActions: () => [
        <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
        <GridActionsCellItem icon={<SaveIcon color={selectedSave} />} label="Save"
          onClick={()=> { setNotEditable('null'); 
                          setSelectedEdit('primary');
                          setSelectedSave('disabled')} } />,
        <GridActionsCellItem icon={<EditIcon color={selectedEdit} />} label="Edit"
          onClick={()=> { setNotEditable('row'); 
                          setSelectedEdit('disabled');
                          setSelectedSave('primary') }
        }  />,
      ],
    },
    { field: 'edit', headerName:'Edit' },
    { field: 'lastName', editable: true, headerName: 'Last Name', width: 200 },
    { field: 'firstName', editable: true, headerName: 'FirstName', width: 200 },
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
  
  
  
  
  

 
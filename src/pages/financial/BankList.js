//import components
import Sidebar2 from '../../components/Sidebar2'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import db from "../../../src/firebase";

// imports styles
import '../listContacts/ListContacts.css';
//import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { DataGrid, GridToolbar, GridActionsCellItem, GridCloseIcon } from "@mui/x-data-grid";
import AddIcon from '@mui/icons-material/Add';
//import { createTheme } from '@mui/system';
//import {purple} from '@material-ui/core/colors';
//import { ThemeProvider } from '@material-ui/core';

  export default function BankList () {

  const [bankList, setBankList] = useState([]);
  const [loading, setLoading] = useState([]);
  const [notEditable, setNotEditable] = useState('null');
  //alert(notEditable)  

  // const theme = createTheme({
  //   palette: {
  //     warning: purple[900],
      
  //   }, 
  // });
  
  
  useEffect(() => {
    db.collection("banks").onSnapshot((snapshot) => {
     setBankList(
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
       
        
        <GridActionsCellItem   icon={<DeleteIcon  color={selectDelete} /> }  />,
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
    { field: 'bankName', editable: true, headerName: 'Bank Name', width: 150 },
    { field: 'accountNumber', editable: true, headerName: 'Account Number', width: 150 },
    { field: 'routingNumber', headerName: 'Routing Number', width: 150 },
    { field: 'bankEmail', headerName: 'Email', width: 200 },
    { field: 'bankURL', headerName: 'Phone Number', width: 175 },
  ]
  

  const navigate = useNavigate();
  const handleClickAddBank = () => {
    navigate('/bankForm') //**Add list page navigation here
   
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
      
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClickAddBank}>
        Add Bank
      </Button>

        <DataGrid
          rows={bankList}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
          editMode={notEditable} 
          initialState={{
            sorting: {
              sortModel: [{ field: 'bankName', sort: 'asc' }],
            },
          }}
          rowsPerPageOptions={[5, 10, 25, 50 , 100]}
          components={{ Toolbar: GridToolbar }}
          //pageSize={12}
        />
      </div>
      {/* <div className="flex-child">
          
          <Button onClick={handleClickAddContact}class="button button2">Add Contact</Button>
      </div> */}
      
    </div>
    
    </>  
    )
  }
  
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

export default function FinancialTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <NavLink exact to="/Banking">
           <Tab label="Banking"  />
          </NavLink>
          
          <NavLink exact to="/Investments">
           <Tab label="Investments"  />
          </NavLink>
           
          <NavLink exact to="Insurance">
           <Tab label="Insurance"  />
          </NavLink>
          
          <NavLink exact to="/OtherAssets">
           <Tab label="Other Assets"  />
          </NavLink>
           
          <NavLink exact to="/DebtsOwedToUs">
            <Tab label="Debts Owed To Us"  />
          </NavLink>
           
          <NavLink exact to="/CreditCards">
           <Tab label="Credit Cards"  />
          </NavLink>
           
          <NavLink exact to="/DebtsWeOwe">
           <Tab label="Debts We Owe"  />
          </NavLink>     
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

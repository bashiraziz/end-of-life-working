import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// styles
import './App.css'

// pages & components
//import Dashboard from './pages/dashboard/Dashboard'
//import Create from './pages/create/Create'
// import CsvReader from './CsvReader/CsvReader'
// import Process from './pages/process/Process'
// import Login from './pages/login/Login'
// import Signup from './pages/signup/Signup'
  import Dashboard from './pages/dashboard/Dashboard' 
  import ContactForm from './pages/contactForm/ContactForm'
  import Setup from './pages/setup/Setup'
  import Navbar from './components/Navbar'
  import Contacts from './pages/contacts/Contacts';
  import ListContacts from './pages/listContacts/ListContacts';
// import Reports from './pages/reports/Reports'
//import Sidebar from './components/Sidebar'

function App() {
  return (
    

    <div className="App">
      <Router>
        <div className="container">
          <Navbar />
          
          <Routes>
            {/* 
            <Route path="/reports" element={<Reports />} />
            <Route path="/process" element={<Process />} />       
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />}/> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contactForm" element={<ContactForm />} />
            <Route path="/setup" element={<Setup />}/>
            <Route path ="/contacts" element={<Contacts />} />
            <Route path="/listContacts" element={<ListContacts />} />
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App

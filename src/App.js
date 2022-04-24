import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import db from "./firebase";

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
  import ContactType from './pages/contactTypes/ContactType'
  import ListContactTypes from './pages/listContactTypes/ListContactTypes'
  import ContactTypeForm from './pages/contactTypeForm/ContactTypeForm'
  import MessageType from './pages/messageTypes/MessageType'
  import ListMessageTypes from './pages/listMessageTypes/ListMessageTypes'
  import MessageTypeForm from './pages/messageTypeForm/MessageTypeForm'
  import DigitalAccounts from './pages/digitalAccounts/DigitalAccounts'
  import FinancialAccounts from './pages/financialInstitutes/FinancialInstitutes'
import Messages from './pages/messages/Messages'
 

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
            <Route path="/" element={<ContactForm />} /> 
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contactForm" element={<ContactForm />} />
            <Route path="/setup" element={<Setup />}/>
            <Route path ="/contacts" element={<Contacts />} />
            <Route path="/listContacts" element={<ListContacts />} />
            <Route path ="/contactTypeForm" element={<ContactTypeForm />} />
            <Route path="/listContactTypes" element={<ListContactTypes />} />
            <Route path="/contactType" element ={<ContactType />} />
            <Route path="/listMessageTypes" element={<ListMessageTypes />} />
            <Route path="/messageType" element={<MessageType />} />
            <Route path="/messageTypeForm" element={<MessageTypeForm />} />
            <Route path="/digitalAccounts" element={<DigitalAccounts />} />
            <Route path="/financialInstitutes" element ={<FinancialAccounts />}/>
            <Route path = "/messages" element={<Messages/>} />
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App

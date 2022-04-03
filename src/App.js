import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// styles
import './App.css'

// pages & components
//import Dashboard from './pages/dashboard/Dashboard'
//import Create from './pages/create/Create'
// import CsvReader from './CsvReader/CsvReader'
// import Process from './pages/process/Process'
// import Login from './pages/login/Login'
// import Pools from './pages/pools/Pools'
// import Signup from './pages/signup/Signup'
   import ContactForm from './components/ContactForm'
   import Setup from './pages/setup/Setup'
   import Navbar from './components/Navbar'
   import Contacts from './pages/contacts/Contacts';
// import Reports from './pages/reports/Reports'
//import Sidebar from './components/Sidebar'

function App() {
  return (
    

    <div className="App">
      <Router>
        <div className="container">
          <Navbar />
          
          <Routes>
            {/* <Route path="/pools" element={<Pools />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/process" element={<Process />} />       
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />}/> */}
            <Route path="/contactForm" element={<ContactForm />} />
            <Route path="/setup" element={<Setup />}/>
            <Route path ="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App

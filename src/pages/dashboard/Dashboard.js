import React from 'react';
import Sidebar2 from '../../components/Sidebar2';
//import ReactDOM from 'react-dom'

// style
import './Dashboard.css'

export default function Dashboard() {

  return (
   <>
    <div className="flex">
      <div className="flex-child-side">
        <Sidebar2 />
      </div>
      <div className="flex-child"></div>
      <div className="flex-child"></div>
    </div>  
  </>
  )
}

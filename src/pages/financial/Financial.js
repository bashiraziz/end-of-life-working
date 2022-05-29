//import styles
import Sidebar2 from '../../components/Sidebar2'
import './Financial.css'
import FinancialTabs from './FinancialTabs'

//import Styles

export default function Financial() {

 return(
  <>
  <div className="flex">
  <div>
   <Sidebar2 />
   </div>
  <div className="tabs">
  <FinancialTabs />
    <h2> This is the Financial Page</h2>
    
  </div>
  </div>
  </>
 )

} 
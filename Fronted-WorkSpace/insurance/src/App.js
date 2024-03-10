import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AdminPage from './Components/AdminPage';
import Login from './Components/Login';
import LoginPage from './Components/LoginPage';
import StrucureAndDetails from './Components/StrucureAndDetails';
import GetQuote from './Components/GetQuote';
import FilldetailsPage from './Components/FilldetailsPage';
import PaymentPage from './Components/PaymentComponent/PaymentPage';

function App() {
  return (
    <div >
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/property" element={<StrucureAndDetails/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/getQuote" element={<GetQuote/>}/>
            <Route path="/fill" element={<FilldetailsPage/>}/>
            <Route path="/payment" element={<PaymentPage/>}/>
          </Routes>
        </div>
      </Router>
    
    </div>
  )
}

export default App


import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Login from './Components/Login'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import StrucureAndDetails from './Components/StrucureAndDetails';
import GetQuote from './Components/GetQuote';
import LoginPage from './Components/LoginPage';
import AdminPage from './Components/AdminPage';




function App() {
  return (
    <div >
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/property" element={<StrucureAndDetails/>}/>
            <Route path="/getQuote" element={<GetQuote/>}/>
          </Routes>
        </div>
      </Router>
    
    </div>
  )
}

export default App

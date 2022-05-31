import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserPage from './pages/UserPage';
import DetailsPage from './pages/DetailsPage';
import { UserAuthContextProvider } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignUpPage/SignupPage';



function App() {
  return (
    <UserAuthContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />}/>
          <Route path='/sign-up' element={<SignupPage />}/>
          <Route path='/users' element={<UserPage />}/>
          <Route path='/user/:id' element={<DetailsPage />} />
        </Routes>
      </Router>
      </UserAuthContextProvider>
  );
}

export default App;

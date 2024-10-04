import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './view/Main';
import DeveloperRegistrationForm from './view/DeveloperRegistrationForm';
import Login from './view/Login';
import Dashboard from './view/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<DeveloperRegistrationForm />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
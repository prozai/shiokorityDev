import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './view/Main';
import DeveloperRegistrationForm from './view/DeveloperRegistrationForm';
import Login from './view/Login';
import Dashboard from './view/Dashboard';
import Setup2FA from './view/Setup2FA';
import Verify2FA from './view/Verify2FA';
import GenerateApiKey from './view/GenerateApiKey';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<DeveloperRegistrationForm />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/setup2FA" element={<Setup2FA />} />
        <Route path="/verify2FA" element={<Verify2FA />} />
        <Route path="/generate-api-key" element={<GenerateApiKey />} />
      </Routes>
    </Router>
  );
}

export default App;
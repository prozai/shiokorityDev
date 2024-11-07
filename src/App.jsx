import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Main from './view/Main';
import DeveloperRegistrationForm from './view/DeveloperRegistrationForm';
import Login from './view/Login';
import Dashboard from './view/Dashboard';
import Setup2FA from './view/Setup2FA';
import Verify2FA from './view/Verify2FA';
import GenerateApiKey from './view/GenerateApiKey';

// Import React Query related components
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const ProtectedRoute = () => {
  const isLogin = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};


// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap your entire app in the QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<DeveloperRegistrationForm />} />
          <Route path="/login" element={<Login />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/setup2FA" element={<Setup2FA />} />
            <Route path="/verify2FA" element={<Verify2FA />} />
            <Route path="/manageApiKeys" element={<GenerateApiKey />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
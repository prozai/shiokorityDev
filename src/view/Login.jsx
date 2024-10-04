import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DevelopersController from '../controller/developersController';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');
    try {
      await DevelopersController.login(formData);
      setStatus('success');
      setTimeout(() => navigate('/dashboard'), 1500); // Redirect after 1.5 seconds
    } catch (error) {
      setStatus('error');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (  
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
        
        {status === 'success' && (
          <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
            Login successful! Redirecting...
          </div>
        )}
        
        {status === 'error' && (
          <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
            Login failed. Please check your credentials and try again.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button 
            type="submit" 
            className={`w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out ${isLoading ? 'opacity-50 cursor-not-allowed' : 'transform hover:-translate-y-0.5'}`}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="text-center">
          <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DevelopersController from '../controller/developersController';
import ShiokorityLogo from '../assets/images/Shiokority.png';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');
    try {
      const response = await DevelopersController.login(formData);
      if (response.success) {
        setStatus('success');
        setTimeout(() => {
          navigate(response.two_factor_enabled ? '/verify2FA' : '/dashboard');
        }, 1500);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogoClick = () => {
    navigate('/'); // Redirect to home
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center">
          <img src={ShiokorityLogo} alt="Shiokority Logo" className="h-40 cursor-pointer" onClick={handleLogoClick} />
        </div>

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
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#153247] focus:border-[#153247]"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#153247] focus:border-[#153247]"
              placeholder="Enter your password"
            />
          </div>
          <button 
            type="submit" 
            className={`w-full px-4 py-2 bg-[#153247] text-white rounded-md hover:bg-[#1e4b64] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#153247] transition duration-150 ease-in-out ${isLoading ? 'opacity-50 cursor-not-allowed' : 'transform hover:-translate-y-0.5'}`}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="text-center">
          <a href="/" className="text-sm text-[#153247] hover:text-[#1e4b64] hover:underline">
            Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DevelopersController from '../controller/developersController';

function Dashboard() {
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await DevelopersController.logout();
      setStatus('Logged out successfully');
      navigate('/login');
    } catch (error) {
      setStatus('Logout failed: ' + error.message);
    }
  };

  const handleSetup2FA = () => {
    navigate('/setup2FA');
  };

  const handleGenerateApiKey = () => {
    navigate('/manageApiKeys')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-[#153247]">Developer Dashboard</h1>
            <div className="flex space-x-2">
              <button
                onClick={handleSetup2FA}
                className="px-4 py-2 bg-[#153247] text-white rounded-md hover:bg-[#1e4b64] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#153247] focus:ring-opacity-50"
              >
                Setup 2FA
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-[#153247] text-white rounded-md hover:bg-[#1e4b64] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#153247] focus:ring-opacity-50"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-[#153247]">
                Welcome to the Developers Dashboard!
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Here you can manage your projects and view your stats.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {status && (
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        status.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {status}
                      </span>
                    )}
                  </dd>
                </div>
                {/* Additional Information */}
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Your Role</dt>
                  <dd className="mt-1 text-sm text-[#153247] sm:mt-0 sm:col-span-2">Developer</dd>
                </div>
                <button
                onClick={handleGenerateApiKey}
                className="px-4 py-2 bg-[#153247] text-white rounded-md hover:bg-[#1e4b64] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#153247] focus:ring-opacity-50"
              >
                Manage API Keys
              </button>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Last Login</dt>
                  <dd className="mt-1 text-sm text-[#153247] sm:mt-0 sm:col-span-2">
                    {new Date().toLocaleString()}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

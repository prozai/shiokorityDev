import React, { useState } from 'react';
import developersController from '../controller/developersController';
import { FiTrash2 } from 'react-icons/fi';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const GenerateApiKey = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  // Fetch API keys
  const { data: apiKeys, isLoading, isError } = useQuery({
    queryKey: ['apiKeys'],
    queryFn: developersController.getApiKeys,  // Method to fetch API keys from backend
  });

  // Mutation for generating an API key
  const generateKeyMutation = useMutation({
    mutationFn: developersController.generateApiKey,
    onSuccess: (response) => {
      setMessage(response.message);
      queryClient.invalidateQueries('apiKeys');  // Refetch API keys after generating one
    },
  });

  // Mutation for deleting an API key
  const deleteKeyMutation = useMutation({
    mutationFn: (apiId) => developersController.deleteApiKey(apiId),  // Method to delete API key by API ID
    onSuccess: () => {
      queryClient.invalidateQueries('apiKeys');  // Refetch API keys after deletion
    },
  });

  // Generate API key handler
  const handleGenerateKey = async () => {
    setLoading(true);
    generateKeyMutation.mutate();
    setLoading(false);
  };

  // Handle deleting an API key
  const handleDeleteKey = (apiId) => {
    deleteKeyMutation.mutate(apiId);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {isError.message}</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h3 className="text-2xl font-bold mb-4">Developer API Keys</h3>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Generate API Key Button */}
        <button onClick={handleGenerateKey} className="bg-[#153247] text-white py-2 px-4 rounded-lg hover:bg-green-600">
          {loading ? 'Generating...' : 'Generate API Key'}
        </button>

        {/* Success or Error Message */}
        {message && <p>{message}</p>}

        {/* Show Message if no API Keys */}
        {apiKeys.length === 0 ? (
          <p>Your API keys will display here when created.</p>
        ) : (
        // Table for Displaying API Keys
        <table className="w-full text-left mt-4">
          <thead>
            <tr className="text-gray-600">
              <th className="py-2 px-4">API ID</th>
              <th className="py-2 px-4">API Key</th>
              <th className="py-2 px-4">Created On</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {apiKeys.map((apiKey) => (
              <tr key={apiKey.api_id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{apiKey.api_id}</td>
                <td className="py-2 px-4">{apiKey.api_key}</td>
                <td className="py-2 px-4">{apiKey.date_created}</td>
                <td className="py-2 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${apiKey.api_status ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                    {apiKey.api_status ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <button onClick={() => handleDeleteKey(apiKey.api_id)} className="text-red-600 hover:text-red-800">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
      </div>
    </div>
  );
};

export default GenerateApiKey;
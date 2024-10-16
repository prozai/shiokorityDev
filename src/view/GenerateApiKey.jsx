// src/views/GenerateApiKey.jsx

import React, { useState } from 'react';
import developersController from '../controller/developersController';

const GenerateApiKey = () => {
    const [apiKeyData, setApiKeyData] = useState({ apiKey: '', iv: '', signature: '' });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerateKey = async () => {
        setLoading(true);
        try {
            const response = await developersController.generateApiKey();
            if (response.success) {
                setApiKeyData({
                  apiKey: response.api_key,  // encrypted API key
                  iv: response.iv,  // AES Initialization Vector (IV)
                  signature: response.signature  // RSA signature
                });
                setMessage('API key generated successfully!');
              } else {
                setMessage(response.message || 'Failed to generate API key');
              }
            } catch (error) {
              setMessage(error.message || 'An error occurred');
            }
            setLoading(false);
          };

return (
    <div>
        <h3>Generate API Key</h3>
        <button onClick={handleGenerateKey} disabled={loading}>
            {loading ? 'Generating...' : 'Generate API Key'}
        </button>
        {message && <p>{message}</p>}
        
        {apiKeyData.apiKey && (
            <div>
                <h4>Your Encrypted API Key:</h4>
                <p>{apiKeyData.apiKey}</p>
                <button onClick={() => navigator.clipboard.writeText(apiKeyData.apiKey)}>
                    Copy Encrypted API Key to Clipboard
                </button>
            </div>
        )}
    </div>
    );
};

export default GenerateApiKey;
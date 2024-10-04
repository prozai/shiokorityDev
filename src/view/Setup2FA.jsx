import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DevelopersController from '../controller/developersController';

function Setup2FA() {
  const [step, setStep] = useState(1);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSetupInfo = async () => {
      try {
        // Fetch QR code
        const qrResponse = await axios.get('/developers/getQRcode', { responseType: 'blob' });
        const imageUrl = URL.createObjectURL(qrResponse.data);
        setQrCodeUrl(imageUrl);

        // Fetch secret key
        const secretResponse = await axios.get('/developers/getSecretKey');
        setSecretKey(secretResponse.data.secret_key);

        setStatus('');
      } catch (error) {
        setStatus('Failed to fetch 2FA setup info: ' + error.message);
      }
    };

    fetchSetupInfo();
  }, []);

  const handleVerification = async () => {
    try {
      const isVerify = await DevelopersController.verify2FA(verificationCode);

      if (isVerify.success) {
        setStatus('2FA setup successful!');
        setStep(3);
      } else {
        setStatus('Verification failed. Please try again.');
      }
    } catch (error) {
      setStatus('Verification failed: ' + error.message);
    }
  };

  const handleFinish = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Setup Two-Factor Authentication
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          {step === 1 && (
            <div>
              <p className="text-center text-sm text-gray-600">
                Scan this QR code with your authenticator app
              </p>
              {qrCodeUrl ? (
                <img src={qrCodeUrl} alt="2FA QR Code" className="mx-auto mt-4 max-w-full h-auto" />
              ) : (
                <p className="text-center">Loading QR code...</p>
              )}
              <p className="mt-2 text-center text-sm text-gray-600">
                Or enter this code manually:
              </p>
              <p className="text-center font-mono break-all">
                {secretKey || 'Loading secret key...'}
              </p>
              <button
                onClick={() => setStep(2)}
                className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Next
              </button>
            </div>
          )}
          {step === 2 && (
            <div>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Enter verification code"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
              <button
                onClick={handleVerification}
                className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Verify
              </button>
            </div>
          )}
          {step === 3 && (
            <div>
              <p className="text-center text-green-600 font-semibold">{status}</p>
              <button
                onClick={handleFinish}
                className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Return to Dashboard
              </button>
            </div>
          )}
        </div>
        {status && step !== 3 && (
          <p className="mt-2 text-center text-sm text-red-600">{status}</p>
        )}
      </div>
    </div>
  );
}

export default Setup2FA;
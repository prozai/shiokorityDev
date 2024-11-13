import api from '../services/api';

class Developers {
    
    static async registerDeveloper(data) {
        try {
            const response = await api.post('/developers/register', data);
            return response.data;
        } catch (error) {
            return new Error('Something wrong with regisration request'); 
        }
    }

    static async login(data) {
        try {
            const response = await api.post('/developers/login', data);
            localStorage.setItem('isLoggedIn', response.data.success);
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('refresh_token', response.data.refresh_token);
            console.log(response.data);

            return response.data;
        } catch (error) {
            return new Error('Something wrong with login request');
        }
    }

    static async logout() {
        try {
            const response = await api.post('/developers/logout');
            localStorage.clear();
            return response.data;
        } catch (error) {
            return new Error('Something wrong with logout request');
        }
    }

    static async verify2FA(code) {
        try {
            const response = await api.post('/developers/2fa/verify', { code });
            return response.data;
        } catch (error) {
            return new Error('Something wrong with 2FA verification request');
        }
    }

    static async getQRcode() {
        try {
            const response = await api.get('/developers/getQRcode', { responseType: 'blob' });
            return response.data;
        } catch (error) {
            return new Error('Something wrong with QR code request');
        }
    }

    static async getSecretKey() {
        try {
            const response = await api.get('/developers/getSecretKey');
            return response.data;
        } catch (error) {
            return new Error('Something wrong with secret key request');
        }
    }

    // Fetch API keys for the developer
    static async getApiKeys() {
        try {
            const response = await api.get('/developers/api-keys');
            return response.data.api_keys;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error fetching API keys');
        }
    }

    // Generate a new API key
    static async generateApiKey() {
        try {
            const response = await api.post('/developers/generate-api-key');
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error generating API keys');
        }
    }

    // Delete an API key
    static async deleteApiKey(apiId) {
        try {
            const response = await api.delete(`/developers/api-keys/${apiId}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Error deleting API key');
        }
    }
}

export default Developers;
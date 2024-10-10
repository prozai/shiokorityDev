import axios from 'axios';

class Developers {
    
    static async registerDeveloper(data) {
        try {
            const response = await axios.post('/developers/register', data);
            return response.data;
        } catch (error) {
            return new Error('Something wrong with regisration request'); 
        }
    }

    static async login(data) {
        try {
            const response = await axios.post('/developers/login', data);
            return response.data;
        } catch (error) {
            return new Error('Something wrong with login request');
        }
    }

    static async logout() {
        try {
            const response = await axios.post('/developers/logout');
            return response.data;
        } catch (error) {
            return new Error('Something wrong with logout request');
        }
    }

    static async verify2FA(code) {
        try {
            const response = await axios.post('/developers/2fa/verify', { code });
            return response.data;
        } catch (error) {
            return new Error('Something wrong with 2FA verification request');
        }
    }

    static async getQRcode() {
        try {
            const response = await axios.get('/developers/getQRcode', { responseType: 'blob' });
            return response.data;
        } catch (error) {
            return new Error('Something wrong with QR code request');
        }
    }

    static async getSecretKey() {
        try {
            const response = await axios.get('/developers/getSecretKey');
            return response.data;
        } catch (error) {
            return new Error('Something wrong with secret key request');
        }
    }

}

export default Developers;
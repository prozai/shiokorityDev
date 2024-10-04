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

}

export default Developers;
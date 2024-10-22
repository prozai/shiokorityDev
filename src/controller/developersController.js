import Developer from '../model/developers.js';

class DevelopersController {

    static async registerDeveloper(data) {
        return await Developer.registerDeveloper(data);
    }
    static async login(data) {
        return await Developer.login(data);
    }
    static async logout() {
        return await Developer.logout();
    }
    static async verify2FA(code) {
        return await Developer.verify2FA(code);
    }
    static async getQRcode() {
        return await Developer.getQRcode();
    }
    static async getSecretKey() {
        return await Developer.getSecretKey();
    }
    // Get API keys
    static async getApiKeys() {
        try {
        return await Developer.getApiKeys();
        } catch (error) {
        throw new Error('Error fetching API keys');
        }
    }

    // Generate API key
    static async generateApiKey() {
        try {
        return await Developer.generateApiKey();
        } catch (error) {
        throw new Error('Error generating API key');
        }
    }

    // Delete API key
    static async deleteApiKey(apiId) {
        try {
        return await Developer.deleteApiKey(apiId);
        } catch (error) {
        throw new Error('Error deleting API key');
        }
    }
}

export default DevelopersController;
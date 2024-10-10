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
}

export default DevelopersController;
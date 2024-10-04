import Developer from '../model/developers.js';

class DevelopersController {

    static async registerDeveloper(data) {
        return Developer.registerDeveloper(data);
    }

    static async login(data) {
        return Developer.login(data);
    }
    
    static async logout() {
        return Developer.logout();
    }

    static async get2FASetupInfo() {
        return Developer.get2FASetupInfo();
    }

    static async verify2FA(code) {
        return Developer.verify2FA(code);
    }
}

export default DevelopersController;
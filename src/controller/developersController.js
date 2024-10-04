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

}

export default DevelopersController;
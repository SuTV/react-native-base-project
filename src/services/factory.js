import AuthService from './biz/auth'
import UserService from './biz/user'

export default class ServiceFactory {
    constructor(realm) {
        this._realm = realm;
    }

    getService = function(type) {
        if(type == AuthService.name) {
            return new AuthService(this._realm);
        } else if (type == UserService.name) {
            return new UserService(this._realm);
        } else {
            return null;
        }
    }
}
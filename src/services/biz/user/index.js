import { AccountTypes } from '../accounts'

export default class UserService {
    constructor(realm) {
    }

    getShortUserNameTitle = function(userInfo) {
        if(userInfo.type == AccountTypes.FACEBOOK) {
            let user = JSON.parse(userInfo.userInfoInString);
            
            return user.first_name.substring(0,1) + user.last_name.substring(0,1); 
        } else {
            return '';
        }
    }

    getUserName = function(userInfo) {
        if(userInfo.type == AccountTypes.FACEBOOK) {
            let user = JSON.parse(userInfo.userInfoInString);
            
            return user.name;
        } else {
            return '';
        }
    }

    getUserProfilePicture = function(userInfo) {
        if(userInfo.type == AccountTypes.FACEBOOK) {
            let user = JSON.parse(userInfo.userInfoInString);

            return user.picture.data.url;
        } else {
            return '';
        }
    }
    
    getUserCoverPicture = function(userInfo) {
        if(userInfo.type == AccountTypes.FACEBOOK) {
            let user = JSON.parse(userInfo.userInfoInString);

            return user.cover.source;
        } else {
            return '';
        }
    }
}
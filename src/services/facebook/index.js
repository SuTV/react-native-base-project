import { AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

let FbService = {
    getAccessTokenString: function(cb) {
        AccessToken.getCurrentAccessToken().then(
            (data) => {
                if(data != null) {
                    cb(data.accessToken.toString());
                } else {
                    cb(null);
                }
            }
        );
    },
    getAccessToken: function(cb) {
        AccessToken.getCurrentAccessToken().then(
            (data) => {
                cb(data);
            }
        );
    },
    logIn: function(cb) {
        LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
            function (result) {
              cb(null, result);
            },
            function (error) {
                cb(error);
            }
        );
    },
    getUserInfo: function(cb) {
        this.getAccessTokenString((accessToken) => {
            if(accessToken != null) {
                const responseInfoCallback = (error, result) => {
                    if (error) { cb(error); }
                    else {
                        cb(null, accessToken, result);
                    }
                }
    
                const infoRequest = new GraphRequest(
                    '/me',
                    {
                    accessToken: accessToken,
                    parameters: {
                        fields: {
                            string: 'id,email,name,first_name,last_name,cover,picture'
                        }
                    }
                    },
                    responseInfoCallback
                );
    
                // Start the graph request.
                new GraphRequestManager().addRequest(infoRequest).start();
            } else {
                cb(null, null, null);
            }
        });
    },
    logOut: function() {
        LoginManager.logOut();
    }
}

module.exports = FbService;
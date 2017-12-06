import  axios from 'axios'
import { API_URL, APP_CODE } from 'react-native-dotenv'

let defaultConfig = {
    baseURL: `${API_URL}`,
    timeout: 3000,
    headers: {'AppCode': `${APP_CODE}`, 'Accept': 'application/json'}
};

let interceptorConfig = {};

let instance : axios;
export default class _Axios {
    constructor(props) {
        if (props && typeof (props) == "object") {
            instance = axios.create(props);
        } else {
            instance = axios.create(defaultConfig);
        }

        instance.interceptors.request.use(function (config) {
            if (config) interceptorConfig = config;
            return config
        }, function (error) {
            return Promise.reject(error);
        });

        instance.interceptors.response.use(function (response) {
            return response.data
        }, function (error) {
            // Do something with response error
            return Promise.reject(error);
        });
    }

    send = (params, cb) => {
        let url;
        let parameters;

        if(!params || typeof (params) != 'object') {
            throw new Error("params is undefined or not an object")
        }

        if (params.method == 'GET') {
            url = params.url;
            get(url, cb);
        } else if (params.method == 'POST') {
            url = params.url;
            parameters = params.obj;
            post(url, parameters, cb);
        }
    }
};

async function get(url, cb) {
    try {
        let response = await instance.get(url);
        return  cb(null, response);
    } catch (error){
        cb(error);
    }
}

async function post(url, params, cb) {
    try {
        let response = await instance.post(url, params);
        return cb(null, response);
    } catch (error) {
        cb(error);
    }
}

export const getAuthConfig = (accessToken) => {
    return {
        baseURL: `${API_URL}`,
        timeout: 3000,
        headers: {'Authorization': `${accessToken}`, 'AppCode': `${APP_CODE}`, 'Accept': 'application/json'}
    };
};
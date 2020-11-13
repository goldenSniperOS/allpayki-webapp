import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api'
});

/*
// Set the AUTH token for any request
axiosInstance.interceptors.request.use(function (conf) {
    const { token, isLoggedIn } = store.getState().user;
    if (isLoggedIn) {
        conf.headers.Authorization = `Bearer ${token}`;
    }
    return conf;
});

axiosInstance.defaults.headers.common = {
    accept: 'application/json',
    'Accept-Language': 'en-US,en;q=0.8'
};

// Add a response interceptor
axiosInstance.interceptors.response.use(
    function (response) {
        const { statusCode } = response.data;
        if (statusCode < 200 || statusCode >= 300) {
            return Promise.reject(response.data);
        }
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);
*/
export default axiosInstance;

import axios from 'axios';

export const BASE_API_URL = `https://47ed-45-64-100-26.ngrok-free.app`;

const api = axios.create({
    baseURL: 'https://47ed-45-64-100-26.ngrok-free.app/api',

});


export const login = async (email, password) => {
    try {
        const response = await api.post('/auth/login', { email, password });

        console.log('Login successful:', response.data);

       
        const { token } = response.data; 

      
        localStorage.setItem('token', token);

        return response.data; 
    } catch (error) {
        console.error('Login failed:', error.response ? error.response.data : error.message);
        throw error;
    }
};



export const logout = async () => {
    try {
        const response = await api.post('/auth/logout');
        console.log('Logout berhasil:', response.data);
    } catch (error) {
        console.error('Logout gagal:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export default api;

